import { sendPrompt } from "@/controller/chat.controller";
import { authenticateJWT } from "@/middlewares/auth.middleware";
import { Router } from "express";


const router = Router();


router.post("/prompt", sendPrompt);

export default router;