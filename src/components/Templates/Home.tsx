import React from 'react'
import ContactGallery from '../Organisms/ContactGallery'
import Deals from '../Organisms/Deals'
import Feature from '../Organisms/Feature'

import MyBlog from '../Organisms/MyBlog'
import Hero from '../Organisms/Hero'
import Navbar from '../Organisms/Navbar'

import Review from '../Organisms/Review'
import Services from '../Organisms/Services'
import Profile from '../Organisms/Profile'

const Home = () => {
    return (
        <>

            <Navbar />

            <div className='bg-rose-100'>
                <div className="pt-[120px] mx-auto max-w-[500px] py-20 grid gap-10 place-items-start lg:flex lg:pt-[150px] lg:max-w-full lg:items-center lg:justify-between lg:pb-0">
                    <Hero />
                </div>
            </div>
            <div className="mx-auto max-w-[500px] grid gap-10 text-center py-20 uppercase lg:flex lg:max-w-full lg:justify-center lg:gap-x-40 lg:py-40">
                <Feature />
            </div>
            <div className='bg-rose-100'>
                <div className="mx-auto max-w-[500px] grid gap-10 text-center py-20 lg:py-40">
                    <Profile />
                </div>
            </div>
            <div className="mx-auto max-w-[500px] py-20 grid gap-10 place-items-start lg:flex lg:max-w-full lg:place-items-center lg:pb-0 flex-row-reverse">
                <Services />
            </div>
            <div className='bg-rose-100'>
                <div className='grid mx-auto max-w-[500px] gap-10 py-20 lg:max-w-[1000px] lg:gap-20'>
                    <Deals />
                </div>
            </div>

            <div className='mx-auto max-w-[500px] grid gap-10 place-items-start lg:flex lg:max-w-full lg:items-center lg:justify-between lg:pb-0'>
                <MyBlog />
            </div>
            <div className='bg-rose-100'>
                <div className='mx-auto max-w-[500px] grid gap-10 place-items-start py-20 lg:flex lg:max-w-[1000px] lg:items-center  lg:py-40'>
                    <Review />
                </div>
            </div>
            <div className='mx-auto max-w-[500px] flex flex-col gap-10 py-20 place-items-center lg:flex-col-reverse lg:max-w-fit'>
                <ContactGallery />
            </div>


            {/* <Feature />
            <ProfileSection />
            <div className='pt-10'>
                <Services />
            </div>
            <div className='bg-rose-100'>
                <div className='sm:w-[500px] sm:mx-auto grid gap-y-10 px-[20px] py-10'>
                    <Deals />
                </div>
            </div>
            <div className='py-10'>
                <MyBlog />
            </div>
            <div className='bg-rose-100'>
                <div className='sm:w-[500px] sm:mx-auto px-[20px] grid gap-y-10 text-[16px] py-20'>
                    <Review />
                </div>
            </div>
            <div className='grid gap-y-10 place-content-center text-center py-14 px-[20px]'>
                <ContactGallery />
            </div> */}
        </>
    )
}

export default Home