import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    verify(token, "", (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized.' });
        }
        next();
    });
};