import React from 'react'
import Button from './Button'
import Image from './Image'
import Label from './Label'
import { HeroProps } from './LabelProps.types'


const Hero = ({ title, paragraphText, buttonText, img }: HeroProps) => {
    return (
        <>
            <div className='text-[40px] font-bold'><Label label={title} /></div>
            <div className='text-[18px] font-sans'>
                <Label label={paragraphText} />
            </div>

            <div className='bg-gray-800 w-[150px] text-white font-bold py-[14px] px-[30px] text-[16px] text-center'>
                <Button label={buttonText} />
            </div>
            <div className='w-[320px] sm:w-[400px] pb-10'>
                <Image label={img} />
            </div>
        </>
    )
}

export default Hero