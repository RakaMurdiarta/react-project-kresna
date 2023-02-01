import React from 'react'
import Label from './Atoms/Title'

interface Content {
    title: string,
    paragraphText: string
}

const VisiMisiContent = ({ title, paragraphText }: Content) => {
    return (
        <div>
            <div className='text-[30px] font-bold pb-4'>
                <Label label={title} /></div>
            <div className='text-[18px]'>
                <Label label={paragraphText} />
            </div>

        </div>
    )
}

export default VisiMisiContent