import React from 'react'
import StepsList from './StepsList'

function Steps() {
    return (
        <section>
            <div className="container mt-[126px]">
                <h3 className="heading-2 text-center text-grey ">How it works</h3>
                <StepsList />
            <a href="#" className='btn mx-auto table mt-20'>Create your plan</a>
            </div>
        </section>
    )
}

export default Steps
