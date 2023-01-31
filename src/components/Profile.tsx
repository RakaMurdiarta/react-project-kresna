import React from 'react'
import Label from './Label'

const Profile = () => {
    return (
        <div className='text-center sm:w-[500px] sm:mx-auto px-[20px] pb-20 pt-2'>
            <div className='pb-10 pt-5 tracking-wide font-bold text-[45px]'><Label label='My Name is Dovile' /></div>
            <div className='text-[18px]'><Label label="I'm your new social media bestie. My mission is to help small and medium-sized businesses grow their audience and brand recognition through social media. To do that, I believe it's paramount to create a committed and genuine community that has a positive influence on people’s lives beyond the online sphere. My goal is to help you understand the power of social media and create connections that go beyond the internet." /></div>
        </div>
    )
}

export default Profile