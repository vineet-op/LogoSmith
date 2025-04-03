import React, { useState } from 'react'
import LogoDescription from './LogoDescription'
import colorPalettes from "../_data/Colors"
import { motion } from "framer-motion";

const LogoColorPallete = ({ onHandleInputChange, formData }) => {

    const [selectedOptions, setselectedOptions] = useState(formData?.color)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <LogoDescription title={"Choose your favourite Color scheme"} description={'Pick the colors which reflects your brand and personality'} />

            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 pt-5 px-10'>
                {colorPalettes.map((color, index) => (
                    <div key={index} className={`flex p-1 cursor-pointer ${selectedOptions === color.name && 'border-2 rounded-lg border-purple-500'} `} >
                        {
                            color?.colors.map((bgc, index) => (

                                <div className='h-24 w-full'
                                    key={index}
                                    style={{
                                        backgroundColor: bgc
                                    }}
                                    onClick={() => {
                                        setselectedOptions(color.name);
                                        onHandleInputChange(color.name)
                                    }}
                                >
                                </div>
                            ))
                        }
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default LogoColorPallete
