'use client';

import React, { useEffect, useState } from 'react';
import Prompt from "../create/_data/Prompt";
import axios from 'axios';
import { Button } from '@/components/ui/button';

const GenerateLogo = () => {
    const [storageData, setStorageData] = useState(null);
    const [base64Image, setBase64Image] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
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

        try {
            setLoading(true);
            const PromptResponse = await axios.post('/api/ai-logo-model', {
                prompt: PROMPT
            });
            setBase64Image(PromptResponse.data.image);
            setLoading(false);
        }
        catch (error) {
            console.error("Error fetching the image:", error);
            console.log(error);
            console.log(error.message);
        }
    };

    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = base64Image;
        link.download = 'AI_generated_logo.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='flex justify-center items-center flex-col'>
            {
                loading ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
                        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
                        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
                    </div>
                ) : (
                    <div className='rounded-lg w-96 h-96 flex flex-col gap-2'>
                        <h1 className='font-mono text-xl text-center rounded-lg font-bold text-purple-500'>Here is your logo by AI</h1>
                        <img src={base64Image} alt={"Logo Image"} className='rounded-lg w-[100%]' />
                        <Button onClick={downloadImage}>Download</Button>
                    </div>
                )
            }
        </div>
    );
};

export default GenerateLogo;
