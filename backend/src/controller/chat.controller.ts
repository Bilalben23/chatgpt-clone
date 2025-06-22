import { Chat } from "@/models/chat.model";
import { generateChatResponse } from "@/utils/generateChat";
import { PromptInput } from "@/validation/prompt.schema";
import type { Request, Response } from "express-serve-static-core"



export const sendPrompt = async (req: Request<{}, {}, PromptInput>, res: Response) => {
    const { prompt } = req.body;

    try {
        const responseText = await generateChatResponse(prompt);

        const chat = await Chat.create({
            prompt,
            response: responseText
        })

        res.status(200).json({
            success: true,
            message: "Response generated successfully.",
            data: {
                responseText,
                chatId: chat._id,
            }
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err instanceof Error ? err.message : "Something went wrong"
        })
    }
}
