import express from "express";
import { getLastTwoMessages, getAllMessages, updateListOfMessages } from "./controller";
import { verifyToken } from "./middleware";
export const router = express.Router();

router.put('/:id', verifyToken, updateListOfMessages)
router.get('/', verifyToken, getAllMessages)
router.get('/last-two', getLastTwoMessages);

