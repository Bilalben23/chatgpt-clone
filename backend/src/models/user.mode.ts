import { Schema, model, Document, Types } from "mongoose";

export interface IUser extends Document<Types.ObjectId> {
    name: string;
    email: string;
    password?: string;
    image?: string;
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
    image: {
        type: String,
        default: null
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