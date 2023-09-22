import { config } from "dotenv";
config();
export const SECRET_KEY = process.env.SECRET_KEY || ""
export const PRODUCT_KEY = process.env.API_ID || ""
export const API_KEY = process.env.API_KEY || ""
export const API_SECRET = process.env.API_SECRET || ""
export const APP_ID = process.env.APP_ID || ""
if (!SECRET_KEY || !PRODUCT_KEY || !API_KEY || !APP_ID || !API_SECRET) {
    throw "missing Environment variables"
}