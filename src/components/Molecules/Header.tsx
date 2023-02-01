import React from 'react'
import ListOrder from '../Atoms/ListOrder'
import Title from '../Atoms/Title'

const Header = () => {
    return (
        <>
            <div className="text-[50px] font-bold cursor-pointer">
                <Title label='dovile' />
            </div>
            <div className="hidden lg:block cursor-pointer">
                <ListOrder />
            </div>

            <div className='text-[45px] block lg:hidden cursor-pointer'><i className='fa-solid fa-bars '></i></div>
        </>

    )
}

export default Header