import React from 'react'
import Title from '../Atoms/Title'

const Feature = () => {
    return (
        <>
            <div className='text-[25px] font-normal'>
                <Title label='featured' />
            </div>
            <div className="text-[30px] font-bold grid gap-16 lg:flex lg:gap-x-40">
                <Title label='lani haw' />
                <Title label='deon five' />
                <Title label='Knoxemus' />
            </div>

        </>
    )
}

export default Feature