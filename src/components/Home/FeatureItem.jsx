import React from 'react'

function FeatureItem(props) {
    const { feature } = props;

    return (
        <div className='text-center text-light-cream bg-dark-cyan rounded-lg px-3 pt-[72px] pb-[50px]  '>
            <img src={feature.icon} alt={feature.title} className='mx-auto w-[72px]' />
            <h4 className="heading-4 mt-[56px] ">{feature.title}</h4>
            <p className="body-text mx-[22px] mt-6 ">{feature.description}</p>
        </div>
    )
}

export default FeatureItem
