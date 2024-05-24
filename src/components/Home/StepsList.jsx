import React from 'react'
import StepItem from './StepItem'

function StepsList(props) {
    const { steps } = props;


    return (
        <div className='md:flex relative '>
            {
                steps.map((step, index) => <StepItem step={step} key={index} index={index} stepsCount={steps.length} />)
            }
        </div>
    )
}

export default StepsList
