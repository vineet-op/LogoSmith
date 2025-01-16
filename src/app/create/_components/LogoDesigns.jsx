import React, { useState } from 'react';
import LogoDescription from './LogoDescription';
import logoThemes from "../_data/logoThemes";
import Image from 'next/image';

const LogoDesigns = ({ onHandleInputChange, formData }) => {

    const [LogoTheme, setLogoTheme] = useState(formData?.design?.title)

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
                        className={`rounded-xl overflow-hidden shadow-lg cursor-pointer flex justify-center items-center flex-col hover:border-purple-600 border ${LogoTheme === logo.title ? 'border-2 border-purple-400' : ''}`}>

                        <Image
                            src={logo.similarImageLink}
                            alt={logo.title}
                            height={250}
                            width={200}
                            className="object-fill rounded-lg bg-transparent w-40"

                        />
                        <div className='p-2'>
                            <h3 className='text-lg font-medium text-white'>{logo.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoDesigns;
