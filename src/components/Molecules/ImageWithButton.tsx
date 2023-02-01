import React from 'react'
import Button from '../Atoms/Button'
import DescriptionsText from '../Atoms/DescriptionsText'
import Image from '../Atoms/Image'
import Title from '../Atoms/Title'
import { HeroProps } from '../LabelProps.types'


const ImageWithButton = ({ title, paragraphText, buttonText, img }: HeroProps) => {
    return (
        <>
            <div className='grid gap-10'>
                <div className='text-[40px] font-bold'>
                    <Title label={title} />
                </div>
                <div className='text-[18px] font-sans'>
                    <DescriptionsText label={paragraphText} />
                </div>

                <div>
                    <Button label={buttonText} />
                </div>
            </div>
            <div className='w-[320px] sm:w-[400px] pb-20 lg:pb-0 lg:w-full lg:object-cover'>

                <Image label={img} />


            </div>
        </>

    )
}

export default ImageWithButton