import React from 'react'
import Header from './Header'

const Navbar = () => {
    return (
        <>
        <nav className='bg-white flex justify-between w-full mx-auto px-[20px] pt-3 lg:flex-col lg:items-center lg:gap-y-5 fixed z-50 lg:pb-5' >
            <Header />
        </nav>
        </>
        
    )
}

export default Navbar