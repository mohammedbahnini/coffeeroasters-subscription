import React from 'react'
import StepItem from './StepItem'

function StepsList() {
    const steps = [
        {
            order : '01' , 
            title : 'Pick your coffee' , 
            description : 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        } , 
        {
            order : '02' ,
            title : 'Choose the frequency' , 
            description : 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        } , 
        {
            order : '03' , 
            title : 'Receive and enjoy!' , 
            description :  `We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
            world-class coffees curated to provide a distinct tasting experience.`
        }
    ]
    return (
        <>
        <div>
            {
            steps.map( (step,index) => <StepItem step={step} key={index} />)
            }
        </div>
        </>
    )
}

export default StepsList
