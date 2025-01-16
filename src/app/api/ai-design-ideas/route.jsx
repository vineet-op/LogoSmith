import { NextResponse } from "next/server"
import { AiModel } from "../../Configs/AiModel"

export async function POST(req) {
    const { prompt } = await req.json()

    try {
        const result = await AiModel.sendMessage(prompt)
        return NextResponse.json(JSON.parse(result.response.text()))
    } catch (error) {
        return NextResponse.json({
            error: error.message
        })
    }
}