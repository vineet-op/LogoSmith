'use client'

import React, { useState } from 'react'
import LogoTitle from "./_components/LogoTitle"
import { Button } from '@/components/ui/button'
import LogoInfo from "./_components/LogoInfo"
import LogoColorPallete from "./_components/LogoColorPallete"
import LogoDesigns from "./_components/LogoDesigns"
import LogoIdea from "./_components/LogoIdea"
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import GenerateLogo from '../generate-logo/page'
import DotPattern from '@/components/ui/dot-pattern'
import { motion } from "framer-motion"

const Create = () => {

    const [steps, setSteps] = useState(1)
    const [formData, setformData] = useState()


    const onHandleInputChange = (field, value) => {
        setformData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    // console.log(formData);

    const renderStepContent = () => {
        switch (steps) {
            case 1:
                return <LogoTitle onHandleInputChange={(v) => onHandleInputChange('title', v)} formData={formData} />;
            case 2:
                return <LogoInfo onHandleInputChange={(v) => onHandleInputChange('info', v)} formData={formData} />;
            case 3:
                return <LogoColorPallete onHandleInputChange={(v) => onHandleInputChange('color', v)} formData={formData} />;
            case 4:
                return <LogoDesigns onHandleInputChange={(v) => onHandleInputChange('design', v)} formData={formData} />;
            case 5:
                return <LogoIdea onHandleInputChange={(v) => onHandleInputChange('idea', v)} formData={formData} />;
            default:
                return null;
        }
    };


    return (
        <div className='mt-28 p-10 border rounded-xl 2xl:mx-72 bg-neutral-900'>
            {
                steps <= 5 ? (
                    renderStepContent()
                ) : (
                    <div>
                        <GenerateLogo />
                    </div>
                )
            }
            <motion.div className="flex justify-between items-center mt-20 px-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

                {steps > 1 && steps <= 5 && (
                    <Button className='font-mono bg-purple-300' onClick={() => setSteps((prev) => prev - 1)} variant="outline">
                        <CircleArrowLeft /> Previous
                    </Button>
                )}
                {steps <= 5 ? (
                    <Button onClick={() => setSteps((prev) => prev + 1)} className="font-mono bg-purple-300" variant="outline">
                        Next <CircleArrowRight />
                    </Button>
                ) : null}
            </motion.div>
        </div>
    )
}

export default Create