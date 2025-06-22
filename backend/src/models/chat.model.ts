import { model, Schema } from "mongoose";

interface Chat extends Document {
    userId: string;
    prompt: string;
    response: string;
    createdAt: Date
}


const chatSchema = new Schema<Chat>({
    userId: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


export const Chat = model("Chat", chatSchema);