import React from 'react'
import Label from './Label'

const Header = () => {
    return (
        <>
            <div className="text-[50px] font-bold uppercase cursor-pointer">
                <Label label='dovile' />
            </div>
            <div className="text-[25px] font-normal uppercase flex justify-center items-center cursor-pointer">
                <div className='gap-20 mr-3 hidden lg:flex '>
                    <Label label='home' />
                    <Label label='services' />
                    <Label label='about me' />
                    <Label label='contact' />
                    <Label label='blog' />
                </div>
                <div className='flex lg:hidden'><i className='fa-solid fa-bars '></i></div>
            </div>
        </>

    )
}

export default Header