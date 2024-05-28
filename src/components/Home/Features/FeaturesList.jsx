import React from 'react'
import FeatureItem from './FeatureItem'

function FeaturesList() {
    const features = [
        {
            icon: '/home/desktop/icon-coffee-bean.svg',
            title: 'Best quality',
            description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
        },
        {
            icon: '/home/desktop/icon-gift.svg',
            title: 'Exclusive benefits',
            description: 'Special offers and swag when you subscribe, including 30% off your first shipment.'
        },
        {
            icon: '/home/desktop/icon-truck.svg',
            title: 'Free shipping',
            description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
        }
    ]
    return (
        <>
            <div className='flex flex-col gap-y-6 mt-16 md:mt-[70px] 
            lg:mt-[86px] lg:flex-row lg:*:flex-1 lg:gap-x-[30px] '>
                {
                    features.map((feature, index) => <FeatureItem feature={feature} key={index} index={index} />)
                }
            </div>

        </>
    )
}

export default FeaturesList
