import express from "express";
import cors from "cors";
import { ENV_VARS } from "./config/envVars";
import { configurePassport } from "./config/passport";
import cookieParser from "cookie-parser";
import passport from "passport";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
import chatRoutes from "./routes/chat.routes";


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


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/chat", chatRoutes);



const PORT = ENV_VARS.PORT;
app.listen(PORT, () => {
    connectDB();
    console.log(`App running on http://localhost:${PORT}`);
})