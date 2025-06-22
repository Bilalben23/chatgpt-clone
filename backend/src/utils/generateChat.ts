import { ENV_VARS } from "@/config/envVars";
import OpenAI from "openai";

const client = new OpenAI({
    baseURL: "https://models.github.ai/inference",
    apiKey: ENV_VARS.OPENAI_TOKEN
});

export async function generateChatResponse(prompt: string): Promise<string> {
    try {
        const response = await client.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt },
            ],
            model: "openai/gpt-4o",
            temperature: 1,
            max_tokens: 4096,
            top_p: 1,
        });

        return response.choices[0].message.content || "";
    } catch (error) {
        console.error("Error generating chat response:", error);
        throw error;
    }
}
