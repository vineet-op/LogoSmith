'use client'

import React, { useState } from 'react'
import LogoDescription from "./LogoDescription"
import { useSearchParams } from 'next/navigation'

const LogoTitle = ({ onHandleInputChange }) => {

    const searchParams = useSearchParams()
    const [LogoTitle, setLogoTitle] = useState(searchParams?.get('title') ?? '')

    return (
        <div className='my-10'>

            <LogoDescription title={"Logo Title"} description={"Enter your Logo Description"} />
            <input
                type="text"
                placeholder='Enter Logo Title'
                className='mx-10 mt-5 p-3 rounded-lg w-[70%] border'
                defaultValue={LogoTitle}
                onChange={(e) => onHandleInputChange(e.target.value)}
            />


        </div>
    )
}

export default LogoTitle