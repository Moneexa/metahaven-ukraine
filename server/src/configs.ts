import { config } from "dotenv";
config();
export const SECRET_KEY = process.env.SECRET_KEY || ""
export const PRODUCT_KEY = process.env.API_ID || ""
export const API_KEY = process.env.API_KEY || ""
export const API_SECRET = process.env.API_SECRET || ""
export const APP_ID = process.env.APP_ID || ""
export const FRONT_END_PORT = process.env.FRONT_END_PORT || ""
if (!SECRET_KEY || !PRODUCT_KEY || !API_KEY || !APP_ID || !API_SECRET || !FRONT_END_PORT) {
    throw "missing Environment variables"
}