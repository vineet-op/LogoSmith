import React from 'react'
import LogoDescription from './LogoDescription'

const LogoInfo = ({ onHandleInputChange }) => {
    return (
        <div className='mt-10'>
            <LogoDescription title={'Enter Description of the logo'} description={'Bring the creative side of the logo'} />
            <input
                type="text"
                placeholder='Enter Logo Title'
                className='mx-10 mt-5 p-3 rounded-lg w-[70%] border'
                onChange={(e) => onHandleInputChange(e.target.value)}
            />
        </div>
    )
}

export default LogoInfo