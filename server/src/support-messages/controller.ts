import { Message } from "./model";
import { Request, Response } from "express";
export const postMessage = async (req: Request, res: Response) => {
    try {
        const { name, amount, message } = req.body;
        const newMessage = await Message.create({ name, amount, message });
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error posting message' });
    }
};

export const getLastTwoMessages = async (req: Request, res: Response) => {
    try {
        const lastTwoMessages = await Message.find().sort({ _id: -1 }).limit(2);
        res.json(lastTwoMessages);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving messages' });
    }
};
