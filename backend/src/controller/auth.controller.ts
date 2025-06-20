import OpenAI from "openai";

const token = "";

export async function main() {

    const client = new OpenAI({
        baseURL: "https://models.github.ai/inference",
        apiKey: token
    });

    const response = await client.chat.completions.create({
        messages: [
            { role: "system", content: "" },
            { role: "user", content: "What is the capital of France?" }
        ],
        model: "openai/gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1
    });

    console.log(response.choices[0].message.content);
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});

