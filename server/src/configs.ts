import { config } from "dotenv";
config();
export const SECRET_KEY = process.env.STRIPE_SECRET_KEY || ""
export const PRODUCT_KEY = process.env.STRIPE_API_ID || ""
export const API_KEY = process.env.VAGON_API_KEY || ""
export const API_SECRET = process.env.VAGON_API_SECRET || ""
export const APP_ID = process.env.VAGON_APP_ID || ""
export const FRONT_END_PORT = process.env.FRONT_END_PORT || ""
export const SIGNING_KEY = process.env.STRIPE_SIGNING_SECRET || ""
export const DB_URL = process.env.DATABASE_URL || ""
export const HEADER_TOKEN = process.env.HEADER_TOKEN || ""
if (!SECRET_KEY || !PRODUCT_KEY || !API_KEY || !APP_ID || !API_SECRET || !FRONT_END_PORT || !SIGNING_KEY || !DB_URL) {
    throw "missing Environment variables"
}