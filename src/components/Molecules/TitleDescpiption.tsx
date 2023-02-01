import React from 'react'
import DescriptionsText from '../Atoms/DescriptionsText'
import Title from '../Atoms/Title'

interface ProfileProps {
    title: string
    text: string
}

const TitleDescpiption = ({ title, text }: ProfileProps) => {
    return (
        <>
            <div>
                <div className="text-[2rem] font-bold pb-10"><Title label={title} /></div>
                <div className="text-[18px] leading-9">
                    <DescriptionsText label={text} />
                </div>
            </div>
        </>
    )
}

export default TitleDescpiption