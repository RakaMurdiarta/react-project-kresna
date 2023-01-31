import React from 'react'
import Hero from './Hero'
import { HeroProps } from './LabelProps.types'

const HeroSection = ({ buttonText, img, paragraphText, title }: HeroProps) => {
    return (

        <div className='flex justify-center items-start px-[20px] flex-col gap-y-10 sm:w-[500px] sm:mx-auto'>
            <Hero title={title} img={img} paragraphText={paragraphText} buttonText={buttonText} />
        </div>

    )
}

export default HeroSection  