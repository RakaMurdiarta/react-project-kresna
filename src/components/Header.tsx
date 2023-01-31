import React from 'react'
import Label from './Label'

const Header = () => {
    return (
        <>
            <div className="text-[50px] font-bold uppercase">
                <Label label='dovile' />
            </div>
            <div className="text-[25px] font-normal uppercase flex justify-evenly gap-20">
                <Label label='home' />
                <Label label='services' />
                <Label label='about me' />
                <Label label='contact' />
                <Label label='blog' />
            </div>
        </>

    )
}

export default Header