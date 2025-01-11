import { NextResponse } from "next/server"
import { AiLogoPrompt } from "../../Configs/AiModel"

export async function POST(req) {
    const { prompt } = await req.json()

    try {
        const AiPromptResult = await AiLogoPrompt.sendMessage(prompt)
        return NextResponse.json(JSON.parse(AiPromptResult.response.text()).prompt)
    } catch (error) {
        return NextResponse({
            error: error
        })
    }
}