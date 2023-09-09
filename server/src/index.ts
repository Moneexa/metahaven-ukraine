import { config } from 'dotenv'
import express, { Request, Response, NextFunction } from 'express';
import cors from "cors"
import { assignStreams } from "./streaming-service/apis/assign-streams"
const app = express();

config();
const port = process.env.PORT || 5000;

app.use(cors())
app.post('/', async (req, res) => {
    try {
        // Access the data from the middleware, e.g., res.locals.assignStreamsData
        const data = await assignStreams()

        // Use the data in your response or perform additional actions
        res.json({ data });
    } catch (error) {
        res.status(500).json(error)
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});