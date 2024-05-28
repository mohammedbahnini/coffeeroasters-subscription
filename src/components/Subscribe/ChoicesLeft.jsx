import React from 'react'
import { Store } from '../../store/app-store'
import cn from 'classnames'

function ChoicesLeft() {
    const { accordions, indexCurrentAccordion } = Store(store => store);


    return (
        <div className='hidden invisible lg:visible lg:block shrink-0 w-[255px] sticky h-fit top-6 '>
            <div className='flex flex-col  divide-y-2 divide-dark-grey-blue/25'>
                {accordions.map((item, index) => (

                    <div
                        className={cn('text-2xl font-black flex gap-x-7  py-6 first:pt-0 last:pb-0 cursor-pointer ', {
                            'opacity-100': index === indexCurrentAccordion,
                            'opacity-40': index !== indexCurrentAccordion
                        })}
                        key={index}
                    >
                        <span
                            className={cn({
                                'text-dark-cyan': index === 0,
                                'text-grey': index !== 0
                            })}
                        >{item.order}</span>
                        
                        <span>{item.altTitle}</span>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChoicesLeft
