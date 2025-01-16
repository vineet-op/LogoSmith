import React from 'react'

function LogoDescription({ title, description }) {
    return (
        <div className='mx-10'>
            <h2 className=' font-mono text-3xl font-bold  text-purple-500'>{title}</h2>
            <div className=' font-mono text-lg  mt-2 text-purple-400'>{description}</div>
        </div>
    )
}

export default LogoDescription
