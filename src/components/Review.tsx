import React from 'react'
import Image from './Image'
import Label from './Label'


const Review = () => {
    return (
        <>
            <div>
                <div className='w-56 pb-8'>
                    <Image label='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1039,fit=crop/dovilelxpfw/testimonial-d95lQjEGjlir2kka.jpg' />
                </div>
                <blockquote><Label label='”We went from having zero online presence to dominating our niche on Google. As a technophobe I never thought we could do it, but currently social media amounts for the majority of our sales.”' /></blockquote>
            </div>
            <div className='leading-6'><strong>Nicollas Ductorn <br /></strong>Director of Corporate MarketingForge Inc.</div>
        </>


    )
}

export default Review