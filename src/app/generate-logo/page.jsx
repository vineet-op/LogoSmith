'use client';

import React, { useEffect, useState } from 'react';
import Prompt from "../create/_data/Prompt";
import axios from 'axios';
import { Button } from '@/components/ui/button';

const GenerateLogo = () => {
    const [storageData, setStorageData] = useState(null);
    const [base64Image, setBase64Image] = useState()
    const [loading, setloading] = useState(false)

    useEffect(() => {
        // Retrieve the stored data from localStorage
        try {
            const data = localStorage.getItem("formData");
            if (data) {
                setStorageData(JSON.parse(data));
            } else {
                console.warn("No data found in localStorage.");
            }
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
        }
    }, []);

    useEffect(() => {
        if (storageData) {
            LogoMaker();
        }
    }, [storageData]);

    const LogoMaker = async () => {
        if (!storageData) return;

        const PROMPT = Prompt.LOGO_PROMPT
            .replace('{logoTitle}', storageData?.title || "")
            .replace('{logoDesc}', storageData?.info || "")
            .replace('{logoColor}', storageData?.color || "")
            .replace('{logoIdea}', storageData?.design?.title || "")
            .replace('{logoDesign}', storageData?.idea || "")
            .replace('{logoPrompt}', storageData?.design?.prompt || "");

        // console.log("Real Prompt", PROMPT);

        try {
            setloading(true)
            const PromptResponse = await axios.post('/api/ai-logo-model', {
                prompt: PROMPT
            })
            setBase64Image(PromptResponse.data.image)
            setloading(false)
        }
        catch (error) {
            console.error("Error fetching the image:", error);
        }
    };

    return (
        <div className='flex justify-center items-center flex-col'>
            {
                loading ? (
                    /* From Uiverse.io by themrsami */
                    <div class="flex justify-center items-center h-full">
                        <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
                        <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
                        <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
                    </div>

                ) : (
                    <div className='rounded-lg w-96 h-96 mt-5'>
                        <h1 className='mb-10 font-mono text-xl p-3 text-center rounded-lg font-medium text-purple-500 bg-black'>Here is your logo by AI</h1>
                        <img src={base64Image} alt={"Logo Image"} className='rounded-lg w-[100%]' />
                    </div>
                )
            }
        </div>
    );
};

export default GenerateLogo;
