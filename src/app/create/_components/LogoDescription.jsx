import React from 'react'

function LogoDescription({ title, description }) {
    return (
        <div className='mx-10'>
            <h2 className=' font-mono text-3xl font-bold  text-purple-500'>{title}</h2>
            <p className=' font-mono text-lg  mt-2 text-purple-400'>{description}</p>
        </div>
    )
}

export default LogoDescription
