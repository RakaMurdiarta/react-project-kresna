import React from 'react'
import Image from './Image'
import { Link } from './Link'
import Social from './Social'

const ContactGallery = () => {
    return (
        <>
            <div className='text-[30px] flex justify-center gap-4'>
                <Social />
            </div>
            <div className='underline text-[25px]'>
                <Link url='www.google.com' value='Terms Condition' />
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <Image label='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/dovilelxpfw/DovileCo-AVLL5DXVDbCVnM4k.jpg' />
                <Image label='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/dovilelxpfw/DovileCo-d955jE6v30UrV7Kg.jpg' />
                <Image label='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/dovilelxpfw/DovileCo-dJooDG0q5os2DJnq.jpg' />
                <Image label='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/dovilelxpfw/DovileCo-mnllO7kBbNhDnj1M.jpg' />
            </div>
        </>

    )
}

export default ContactGallery