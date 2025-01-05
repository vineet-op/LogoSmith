'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React, { useState } from 'react'

const Hero = () => {

    const [LogoTitle, SetLogoTitle] = useState('');

    return (
        <main>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center text-white">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Create Stunning Logos in Minutes
                            </h1>
                            <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                                Unleash your brand's potential with AI-powered logo design. No design skills required.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <input value={LogoTitle}
                                placeholder='Enter Logo Description'
                                className='p-2 mt-2 rounded-lg w-64 text-black outline-none'
                                onChange={(e) => SetLogoTitle(e.target.value)}
                            />
                            <Link href={'/create?title=' + LogoTitle}>
                                <Button size="lg" className="text-lg font-bold bg-purple-600 text-white hover:text-gray-100">
                                    Start Designing
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero