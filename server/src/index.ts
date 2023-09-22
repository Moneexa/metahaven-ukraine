import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { SECRET_KEY, PRODUCT_KEY } from "./configs"
import { assignStreams } from "./streaming-service/apis/assign-streams";
import Stripe from "stripe"
const app = express();
const port = process.env.PORT || 5000;
const stripe = new Stripe(SECRET_KEY, {
    apiVersion: '2023-08-16',
});

app.use(cors());
app.post("/api/streams", async (req, res) => {
    try {
        // Access the data from the middleware, e.g., res.locals.assignStreamsData
        const data = await assignStreams();

        // Use the data in your response or perform additional actions
        res.json({ data });
    } catch (error) {
        res.status(500).json(error);
    }
});

app.get('/create-checkout-session/:price', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell

                price: PRODUCT_KEY,
                quantity: Number(req.params.price) || 0,
            },

        ],
        custom_fields: [
            {
                key: 'supportMessage',
                label: {
                    type: 'custom',
                    custom: 'Support Message',
                },
                type: 'text',
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:5173?success=true`,
        cancel_url: `http://localhost:5173?canceled=true`,
    });

    res.redirect(303, session.url || "");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
