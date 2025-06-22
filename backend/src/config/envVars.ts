import dotenv from "dotenv";
dotenv.config();


export const ENV_VARS = {
    PORT: Number(process.env.PORT) || 5000,
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
    NODE_ENV: (process.env.NODE_ENV || "development") as ("development" | "production"),
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/chatGPT",
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "your-access-secret",
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "your-refresh-secret",
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "your-google-client-id",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "your-google-client-secret",
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:5000/api/auth/google/callback"
} as const

