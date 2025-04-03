import React from 'react'
import LogoDescription from "./LogoDescription"
import { motion } from "framer-motion"

const LogoTitle = ({ onHandleInputChange, formData }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='my-10'
        >
            <LogoDescription title={"Logo Title"} description={"Enter your title which goes with logo"} />
            <input
                type="text"
                placeholder='Enter Logo Title'
                className='mx-10 mt-5 p-3 rounded-lg w-[70%] border font-mono'
                value={formData?.title}
                onChange={(e) => onHandleInputChange(e.target.value)}
            />
        </motion.div>
    )
}

export default LogoTitle