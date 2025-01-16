import React from 'react'
import LogoDescription from './LogoDescription'

const LogoInfo = ({ onHandleInputChange, formData }) => {
    return (
        <div className='mt-10'>
            <LogoDescription title={'Enter Description of the logo'} description={'Bring the creative side of the logo'} />
            <textarea
                type="text"
                placeholder='Enter Logo Description'
                value={formData?.info}
                className='mx-10 mt-5 p-3 rounded-lg w-[70%] border'
                onChange={(e) => onHandleInputChange(e.target.value)}
            />
        </div>
    )
}

export default LogoInfo