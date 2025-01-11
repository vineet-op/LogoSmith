const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const AiModel = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Based on Logo of type Mascot logo Generate a text prompt to create Logo for Logo title/Brand name : Footbal Fans with decription: A footbal club of fans and refering to prompt: A dynamic and detailed mascot logo featuring a friendly animal or character with bold typography, ideal for a sports team or gaming brand.. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), return Result in JSON format give array of logo ideas only strings and keep name of object logo ideas" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"logo_ideas\": [\n    \"Roaring Lion Football Fan\",\n    \"Grinning Bulldog Supporter\",\n    \"Energetic Fox Team Player\",\n    \"Cheerful Bear Mascot Fan\",\n    \"Agile Panther Club Spirit\"\n  ]\n}\n```\n" },
            ],
        },
    ],
});

export const AiLogoPrompt = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: " Generate a text prompt to create Logo for Logo Title/Brand name : Coffee Shop,with description: A logo for a coffee shop like starbucks, with Color combination of Forest Whisper, also include the App Logo and include Sleek Coffee Mug Icon design idea and Referring to this Logo Prompt:A sleek and minimalist app logo with a modern icon and gradient colors, designed for mobile or web applications.  Give me result in JSON portal with prompt field only" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"prompt\": \"Create a logo for a coffee shop named 'Coffee Shop', styled similarly to Starbucks but with a 'Forest Whisper' color palette. The design should include a sleek coffee mug icon. Additionally, generate an app logo version that is sleek and minimalist with a modern icon, incorporating gradient colors suitable for mobile and web applications. Ensure the coffee shop logo and app logo maintain a cohesive visual identity, referencing a modern design aesthetic.\"\n}\n```\n" },
            ],
        },
    ],
});



