import dotenv from "dotenv";
dotenv.config();


export const ENV_VARS = {
    PORT: Number(process.env.PORT) || 5000,
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
    NODE_ENV: (process.env.NODE_ENV || "development") as ("development" | "production"),
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/chatGPT"
} as const

