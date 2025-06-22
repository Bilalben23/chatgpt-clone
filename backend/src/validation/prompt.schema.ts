import { z } from "zod";

export const promptSchema = z.object({
    prompt: z.string({ required_error: "Prompt is required" })
        .nonempty("Prompt is required")

});

export type PromptInput = z.infer<typeof promptSchema>;
