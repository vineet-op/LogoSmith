
import React, { useState } from 'react'
import LogoDescription from "./LogoDescription"


const LogoTitle = ({ onHandleInputChange, formData }) => {

    return (

        <div className='my-10'>
            <LogoDescription title={"Logo Title"} description={"Enter your title which goes with logo"} />
            <input
                type="text"
                placeholder='Enter Logo Title'
                className='mx-10 mt-5 p-3 rounded-lg w-[70%] border font-mono'
                value={formData?.title}
                onChange={(e) => onHandleInputChange(e.target.value)}
            />
        </div>
    )
}

export default LogoTitle