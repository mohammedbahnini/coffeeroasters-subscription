import React from 'react'

function StepItem(props) {
    const { step } = props;

    return (
        <div className='mt-20'>
            <h1 className="text-[72px] font-black text-pale-orange text-center">{step.order}</h1>
            <h2 className="heading-3 text-dark-grey-blue text-center mt-6">{step.title}</h2>
            <p className="body-text text-center text-dark-grey-blue mt-6 break-keep">{step.description}</p>
        </div>
    )
}

export default StepItem
