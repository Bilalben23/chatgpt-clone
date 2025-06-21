import express from "express";
import cors from "cors";
import { ENV_VARS } from "./config/envVars";
import { configurePassport } from "./config/passport";
import cookieParser from "cookie-parser";
import passport from "passport";
import connectDB from "./config/db";

const app = express();
configurePassport();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: [ENV_VARS.CLIENT_URL],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))
app.use(passport.initialize());


const PORT = ENV_VARS.PORT;
app.listen(PORT, () => {
    connectDB();
    console.log(`App running on http://localhost:${PORT}`);
})