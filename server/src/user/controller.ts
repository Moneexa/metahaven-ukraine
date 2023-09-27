import { compare, hash } from "bcrypt"
import { HEADER_TOKEN } from "../configs";
import { Request, Response } from "express";
const saltRounds = 10; // Number of salt rounds for hashing

const hashPassword = async (password: string): Promise<string> => {
    try {
        const hashedPassword = await hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};



export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const encryptedPass = await hashPassword(password)
    try {

        compare(password, encryptedPass).then(result => {
            res.status(200).json({ HEADER_TOKEN });
        }).catch(err => {
            return res.status(401).json({ message: 'Incorrect password.' });
        })
    } catch (error: any) {
        console.error(error.message)
    }


};


