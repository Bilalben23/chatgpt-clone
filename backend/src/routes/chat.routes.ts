import * as ChatController from "@/controller/chat.controller";
import { authenticateJWT } from "@/middlewares/auth.middleware";
import { validate } from "@/middlewares/validate.middleware";
import { promptSchema } from "@/validation/prompt.schema";
import { Router } from "express";


const router = Router();


router.post(
    "/prompt",
    validate({ body: promptSchema }),
    ChatController.sendPrompt
);

export default router;