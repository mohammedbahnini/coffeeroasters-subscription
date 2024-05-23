import React from 'react'
import FeaturesList from './FeaturesList'

function Features() {
    return (
        <section>
            <div className="container mt-[120px] md:mt-[144px]  ">
                <div className="px-6  text-center relative overflow-hidden md:px-[57px] before:absolute before:left-0 before:-z-10 before:w-full before:h-[902px] before:bg-dark-grey-blue before:rounded-10 md:before:h-[573px] ">
                    <h3 className='heading-2 text-light-cream mt-16  md:mt-14 '>Why choose us?</h3>
                    <p className="body-text text-light-cream/80 mt-6 md:mx-4  ">A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                    <FeaturesList />
                </div>
            </div>
        </section>
    )
}

export default Features
