import React, { useState } from 'react';
import LogoDescription from './LogoDescription';
import logoThemes from "../_data/logoThemes";
import Image from 'next/image';

const LogoDesigns = ({ onHandleInputChange }) => {

    const [LogoTheme, setLogoTheme] = useState()

    return (
        <div className='px-10'>
            <LogoDescription
                title={'Select Theme of your choice'}
                description={'Select the best theme which closely resembles your brand'}
            />

            <div className='grid grid-cols-2 gap-2 mt-6'>
                {logoThemes.map((logo, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setLogoTheme(logo.title);
                            onHandleInputChange(logo)
                        }}
                        className={`rounded-xl overflow-hidden shadow-lg cursor-pointer flex justify-center items-center flex-col ${LogoTheme === logo.title ? 'border-2 border-purple-400' : ''}`}>

                        <Image
                            src={logo.similarImageLink}
                            alt={logo.title}
                            height={250}
                            width={200}
                            className="object-fill rounded-lg"

                        />
                        <div className='p-2'>
                            <h3 className='text-lg font-medium'>{logo.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoDesigns;
