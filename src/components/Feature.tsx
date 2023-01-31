import React from 'react'
import Label from './Label'

const Feature = () => {
    return (
        <div className='flex flex-col justify-center items-center text-[45px] tracking-widest font-bold gap-y-5 py-20 uppercase'>
            <div className='text-[25px] font-thin'><Label label='featured' /></div>
            <div><Label label='lani haw' /></div>
            <div><Label label='deon five' /></div>
            <div><Label label='Knoxemus' /></div>
        </div>
    )
}

export default Feature