import React from 'react'
import { motion } from "framer-motion";

function LogoDescription({ title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mx-10'
        >
            <h2 className='font-mono text-3xl font-bold text-purple-500'>{title}</h2>
            <div className='font-mono text-lg mt-2 text-purple-400'>{description}</div>
        </motion.div>
    )
}

export default LogoDescription
