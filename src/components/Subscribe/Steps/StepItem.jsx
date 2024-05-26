import React from 'react'
import cn from 'classnames'

function StepItem(props) {
    const { step, index , stepsLength } = props;

    return (
        <div className='relative  md:pt-20 [&:not(:last-child)]:pr-[10px] md:flex-1 lg:[&:not(:last-child)]:pr-[95px] lg:pt-[100px] '>
            <div className='hidden invisible md:block md:visible flex items-center absolute top-0 left-0 right-0'>
                <span className='block w-8 aspect-square border-2 border-dark-cyan rounded-full '></span>
                <span className={cn('absolute -right-[14px] w-full h-[2px] bg-pale-orange -ml-[14px]' ,{ 'hidden invisible' : index === stepsLength -1 })}></span>
            </div>

            <div className='text-center md:text-left'>
                <h2 className='text-7xl leading-none font-black text-pale-orange '>{step.order}</h2>
                <div className='mt-6 flex flex-col gap-y-6 md:gap-y-10 md:mt-[42px]  '>
                    <h3 className='heading-3 text-white lg:pr-12'>{step.title}</h3>
                    <p className='text-white body-text break-keep '>{step.description}</p>
                </div>
            </div>
        </div>
    )
}

export default StepItem
