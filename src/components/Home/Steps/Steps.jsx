import React from 'react'
import StepsList from './StepsList'
import cn from 'classnames'
import StepsCircles from './StepsCircles'

function Steps() {
    const steps = [
        {
            order: '01',
            title: 'Pick your coffee',
            description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        },
        {
            order: '02',
            title: 'Choose the frequency',
            description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        },
        {
            order: '03',
            title: 'Receive and enjoy!',
            description: `We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
            world-class coffees curated to provide a distinct tasting experience.`
        }
    ]
    return (
        <section>
            <div className="container mt-[126px] md:mt-[144px] lg:mt-[200px]  ">

                <div className='lg:px-[85px] lg:pr-[150px]  '>
                    <h3 className="heading-4 text-center text-grey md:text-left ">How it works</h3>
                    
                    <StepsList steps={steps} />

                    <a href="#" className='btn mx-auto table mt-20 md:ml-0 md:mt-11 lg:mt-[64px] '>Create your plan</a>
                </div>
            </div>
        </section>
    )
}

export default Steps
