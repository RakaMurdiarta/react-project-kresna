import React from 'react'
import { LabelProps } from '../LabelProps.types'

const Button = ({ label }: LabelProps) => {
    return (
        <div className='bg-gray-800 w-[150px] text-white font-bold py-[14px] px-[30px] text-[16px] text-center'>
            <button>{label}</button>
        </div>
    )
        
}

export default Button