import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import Stripe from "stripe"
const port = process.env.PORT || 5000;

import { SECRET_KEY, PRODUCT_KEY, FRONT_END_PORT, SIGNING_KEY } from "./configs"
import { assignStreams } from "./streaming-service/apis/assign-streams";

const app = express();

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

app.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
    const sig = request.headers['stripe-signature'] || "";

    let event;

    try {
        event = stripe.webhooks.constructEvent(request.body, sig, SIGNING_KEY);
    } catch (err) {
        response.status(400).send(`Webhook Error: ${err}`);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const checkoutSessionCompleted = event.data.object;
            // Then define and call a function to handle the event checkout.session.completed
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
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
        success_url: `${FRONT_END_PORT}/checked?success=true`,
        cancel_url: `${FRONT_END_PORT}/failed?canceled=true`,
    });

    res.redirect(303, session.url || "");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
