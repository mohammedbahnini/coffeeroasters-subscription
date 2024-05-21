import React from 'react'
import FeatureItem from './FeatureItem'

function FeaturesList() {
    const features = [
        {
            icon: '/public/home/desktop/icon-coffee-bean.svg',
            title: 'Best quality',
            description: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
        },
        {
            icon: '/public/home/desktop/icon-gift.svg',
            title: 'Exclusive benefits',
            description: 'Special offers and swag when you subscribe, including 30% off your first shipment.'
        },
        {
            icon: '/public/home/desktop/icon-truck.svg',
            title: 'Free shipping',
            description: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
        }
    ]
    return (
        <>
            <div className='flex flex-col gap-y-6'>
                {
                    features.map((feature, index) => <FeatureItem feature={feature} key={index} />)
                }
            </div>

        </>
    )
}

export default FeaturesList