import React from 'react'
import StepItem from './StepItem'

function StepList() {
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
            description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
        }
    ]
    return (
        <div className='py-20 flex flex-col gap-y-[56px] md:flex-row md:py-[97px] lg:py-[100px] lg:pl-[85px] lg:pr-[150px]  '>
            {
                steps.map((step, index) => <StepItem step={step} index={index} key={index} stepsLength={steps.length} />)
            }
        </div>
    )
}

export default StepList
