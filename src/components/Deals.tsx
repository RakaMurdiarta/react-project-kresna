import React from 'react'
import Label from './Label'
import VisiMisiContent from './VisiMisiContent'

const Deals = () => {
    return (
        <>
            <div className='text-[40px] font-bold'><Label label='Are you ready to...' /></div>
            <div className='grid gap-y-10'>
                <VisiMisiContent title="Create content that's visually pleasing?" paragraphText="It's not enough to just create an account and post something. Your content needs to represents your brand and showcase your mission and values. And you want to do it in a way that stops the user in their tracks – with beautiful content." />
                <VisiMisiContent title="Grow your brand and turn your audience into paying clients?" paragraphText="Selling online is different from traditional sales channels. But most of all, you need to gain your audience's trust if you want them to part with their dollar." />
                <VisiMisiContent title="Get hold of your dream clients online?" paragraphText="Everybody is online, so why shouldn't you try to reach out to them? With a bigger reach than ever before, the world really is your oyster when it comes to selling online." />
                <VisiMisiContent title="Invest in your brand and take your business to the next level?" paragraphText="Social media marketing is much more than simply posting about an upcoming sale. With the right approach, you can exponentially grow your bottom line." />
            </div>
        </>
    )
}

export default Deals