import React from 'react'
import Header from './Header'

const Navbar = () => {
    return (
        <>
        <nav className='bg-white flex items-center flex-col gap-y-5 py-10 w-full fixed'>
            <Header />
        </nav>
        </>
        
    )
}

export default Navbar