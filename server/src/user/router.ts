import express from "express";
import { login } from "./controller";
export const router = express.Router();

router.post('/login', login);