import React from 'react'
import cn from 'classnames'

function StepsCircles(props) {
    const { stepsCount } = props;
    return (
        <div className='hidden invisible md:flex md:visible mt-10 lg:mt-20 ' >
        {
            
            [...Array(stepsCount).keys()].map((step, index) => (
                <div className='relative flex-1 flex items-center' key={index}>
                    <span className='w-[31px] aspect-square border-dark-cyan border-2 block rounded-full '></span>
                    <span className={cn('h-[2px] bg-pale-orange block w-full  ' , {
                        'hidden' : index === stepsCount -1 
                    })}></span>
                </div>
            ))
        }
    </div>

    )
}

export default StepsCircles
