import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    provider: "local" | "google";
    googleId?: string;
}


const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: function () {
            return this.provider === "local"
        }
    },
    provider: {
        type: String,
        enum: ["local", "google"],
        default: "local"
    },
    googleId: {
        type: String,
        default: null
    }
}, { timestamps: true });

export const User = model<IUser>("User", userSchema);