import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: String,
    amount: String,
    message: String,
    show: Boolean,
});

export const Message = mongoose.model('Message', messageSchema);

