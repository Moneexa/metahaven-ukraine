import { SECRET_KEY, DB_URL, FRONT_END_PORT, SIGNING_KEY } from "./configs"
import express, { Request, Response, NextFunction, } from "express";
import cors from "cors";
import { router } from "./support-messages/router";
import Stripe from "stripe"
import mongoose from "mongoose";
import { StripeResponse } from "./stripTypes";
const port = process.env.PORT || 5000;

import { assignStreams } from "./streaming-service/apis/assign-streams";
import { Message } from "./support-messages/model";


mongoose.connect(DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to the database!');
});

const app = express();

const stripe = new Stripe(SECRET_KEY, {
    apiVersion: '2023-08-16',
});


app.use(cors());
// app.use(express.json())
app.use(express.urlencoded({ extended: true })); // New: replaces body-parser for URL-encoded form data
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
app.use("/messages", router);
app.post('/webhook', express.raw({ type: 'application/json' }), async (request: Request, response: Response) => {
    const sig = request.headers['stripe-signature'] || "";

    let event;

    try {
        event = stripe.webhooks.constructEvent(request.body, sig, SIGNING_KEY);
        if (event.type === "checkout.session.completed") {
            const eventObjectype = event.data.object as StripeResponse
            const payload = {
                name: eventObjectype.customer_details.name,
                amount: `$${(parseFloat(eventObjectype.amount_total) / 100).toFixed(2)}`,
                message: eventObjectype.custom_fields?.[0]?.text?.value
            }
            try {
                const newMessage = await Message.create(payload);
                response.status(201).json(newMessage);
            } catch (error: any) {
                console.error(error?.message)
                response.status(500).json({ message: 'Error posting message' });
            }


        }
    } catch (err) {
        console.log(err)
        response.status(400).send(`Webhook Error: ${err}`);
        return;
    }
    response.send();
});


app.get('/create-checkout-session/:price', async (req, res) => {
    try {
        const price = parseInt(req.params.price);
        const session = await stripe.checkout.sessions.create({
            submit_type: "donate",
            line_items: [{
                price_data: {
                    currency: 'usd',
                    unit_amount: price * 100,
                    product_data: {
                        'name': 'Metahaven Ukrain Donation',
                    },
                },
                quantity: 1
            }],
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
            success_url: `${FRONT_END_PORT}/checked`,
            cancel_url: `${FRONT_END_PORT}/failed`,
        });
        res.redirect(303, session.url || "");
    } catch (error) {
        // @ts-ignore
        console.error(error.message);
        res.status(502).send("Couldn't process at the moment. Please try again later.")
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
