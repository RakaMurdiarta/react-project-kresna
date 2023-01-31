import React from 'react'
import ContactGallery from './ContactGallery'
import Deals from './Deals'
import Feature from './Feature'
import HeroSection from './HeroSection'
import MyBlog from './MyBlog'
import Navbar from './Navbar'
import ProfileSection from './ProfileSection'
import Review from './Review'
import Services from './Services'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='bg-rose-100'>
                <div className="pt-[120px]"></div>
                <HeroSection buttonText='Contact Me' title='Hello, so good to see you!' paragraphText='I help small and medium-sized businesses grow their audience and brand recognition through social media.' img='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=895,fit=scale-down/dovilelxpfw/img-mnllKKGWbPub6RLL.jpg' />
            </div>
            <Feature />
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
            </div>
        </>
    )
}

export default Home