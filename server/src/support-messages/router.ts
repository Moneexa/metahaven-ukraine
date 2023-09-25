import express from "express";
import { postMessage, getLastTwoMessages } from "./controller";
export const router = express.Router();

router.post('/', postMessage);
router.get('/last-two', getLastTwoMessages);

