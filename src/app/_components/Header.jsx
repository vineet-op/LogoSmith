import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-screen p-5 bg-neutral-200 flex justify-between items-center px-10'>
            <Image src={"./logo.svg"} width={180} height={100} alt='logo image' />
            <Button className='bg-pink-600 text-white font-medium text-md'>Get Started</Button>
        </div>
    )
}

export default Header