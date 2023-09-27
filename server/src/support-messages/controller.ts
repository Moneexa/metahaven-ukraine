import { Message } from "./model";
import { Request, Response } from "express";

export const getLastTwoMessages = async (req: Request, res: Response) => {
    try {
        const lastTwoMessages = await Message.find({ show: true }).sort({ _id: -1 }).limit(2);
        res.json(lastTwoMessages);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving messages' });
    }
};


export const getAllMessages = async (req: Request, res: Response) => {
    try {
        const messages = await Message.find().sort({ _id: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving messages' });
    }
};

export const updateListOfMessages = async (req: Request, res: Response) => {
    try {
        const updatedMessage = await Message.findByIdAndUpdate(req.params.id, { show: true })
        if (!updatedMessage) {
            return res.status(404).json({ message: "Message not found" });
        }

        return res.status(200).json(updatedMessage);

    } catch (error) {
        console.error("Error updating message:", error);
        return res.status(500).json({ message: "Internal server error" });

    }
}