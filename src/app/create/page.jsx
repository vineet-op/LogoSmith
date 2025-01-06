'use client'

import React, { useState } from 'react'
import LogoTitle from "./_components/LogoTitle"
import { Button } from '@/components/ui/button'
import LogoInfo from "./_components/LogoInfo"
import LogoColorPallete from "./_components/LogoColorPallete"
import LogoDesigns from "./_components/LogoDesigns"
import LogoIdea from "./_components/LogoIdea"
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'

const Create = () => {

    const [steps, setSteps] = useState(1)
    const [formData, setformData] = useState()


    const onHandleInputChange = (field, value) => {
        setformData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    console.log(formData);


    return (
        <div className='mt-28 p-10  border rounded-xl 2xl:mx-72'>
            {steps == 1 ?

                <LogoTitle onHandleInputChange={(v) => onHandleInputChange('title', v)} /> :

                steps == 2 ?
                    <LogoInfo onHandleInputChange={(v) => onHandleInputChange('info', v)} /> :

                    steps == 3 ?
                        <LogoColorPallete onHandleInputChange={(v) => onHandleInputChange('color', v)} /> :

                        steps == 4 ?
                            <LogoDesigns onHandleInputChange={(v) => onHandleInputChange('design', v)} /> :

                            steps == 5 ?
                                <LogoIdea onHandleInputChange={(v) => onHandleInputChange('idea', v)} /> :
                                null
            }

            <div className='flex justify-between items-center mt-20 px-10'>
                {steps != 1 &&
                    <Button onClick={() => setSteps(steps - 1)} variant={'outline'}><CircleArrowLeft />Previous</Button>
                }
                <Button onClick={() => setSteps(steps + 1)} className='bg-pink-600'>Next<CircleArrowRight /></Button>
            </div>

        </div>
    )
}

export default Create