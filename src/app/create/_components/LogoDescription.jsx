import React from 'react'

function LogoDescription({ title, description }) {
    return (
        <div className='mx-10'>
            <h2 className='text-3xl font-bold text-pink-600'>{title}</h2>
            <p className='text-lg text-gray-500 mt-2'>{description}</p>
        </div>
    )
}

export default LogoDescription
