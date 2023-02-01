import React from 'react'
import DescriptionsText from '../Atoms/DescriptionsText'
import Image from '../Atoms/Image'


const Review = () => {
    return (
        <>

            <div className='w-56 pb-8 lg:w-full lg:pb-0'>
                <Image label='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1039,fit=crop/dovilelxpfw/testimonial-d95lQjEGjlir2kka.jpg' />
            </div>
            <div>
                <blockquote className='text-[18px] py-10 lg:text-[24px]'><DescriptionsText label='”We went from having zero online presence to dominating our niche on Google. As a technophobe I never thought we could do it, but currently social media amounts for the majority of our sales.”' /></blockquote>
                <div className='leading-6 text-[18px]'><strong>Nicollas Ductorn <br /></strong>Director of Corporate MarketingForge Inc.</div>
            </div>
        </>
    )
}

export default Review