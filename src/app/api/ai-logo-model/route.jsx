import { NextResponse } from "next/server"
import { AiLogoPrompt } from "../../Configs/AiModel"
import axios from "axios"

export async function POST(req) {
    const { prompt } = await req.json()

    try {
        const AiPromptResult = await AiLogoPrompt.sendMessage(prompt)
        const output = JSON.parse(AiPromptResult.response.text()).prompt
        console.log("output", output);

        const response = await axios.post(
            "https://api-inference.huggingface.co/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA",
            output,
            {
                headers: {
                    Authorization: "Bearer " + process.env.HUGGING_FACE_API,
                    "Content-Type": "application/json",
                },
                responseType: "arraybuffer",
            }
        );
        console.log("data from api", response.data);

        const buffer = Buffer.from(response.data, "binary")
        const base64Image = buffer.toString("base64")

        const base64ImageWithMime = `data:image/png;base64,${base64Image}`;
        console.log(base64ImageWithMime);


        return NextResponse.json({ image: base64ImageWithMime });

    } catch (error) {
        return NextResponse.json({
            error: error.message
        });
    }
}