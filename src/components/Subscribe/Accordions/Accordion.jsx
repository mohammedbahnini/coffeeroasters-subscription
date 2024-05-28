import React, { useState } from 'react'
import cn from 'classnames'
import AccordionItem from './AccordionItem';
import { Store } from '../../../store/app-store';
import { GRIND_TYPE } from '../../../store/types';

function Accordion(props) {
    const { grindIsEnable , setCurrentAccordion } = Store( store => store );
    const { item, index, type  } = props;
    const { choices } = item;
    const [isOpen, setIsOpen] = useState(false);
    const isEnabled = item.type === GRIND_TYPE ? grindIsEnable : true;

    const handleClick = ()=>{
        setIsOpen(!isOpen)
        setCurrentAccordion(index)
    }


    return (
        <div>
            <div
                className={cn('flex justify-between items-center cursor-pointer  ' , {
                    'pointer-events-none cursor-auto opacity-50' : !isEnabled
                })}
                onClick={handleClick}
            >
                <h3 className='font-black text-grey text-2xl leading-[28px] max-w-[240px] md:max-w-max  '>{item.title}</h3>
                <span className={cn('rotate-180 origin-center transition-transform duration-100 ease-in', {
                    'rotate-180': isOpen,
                    'rotate-0': !isOpen
                })}>
                    <img src="/plan/desktop/icon-arrow.svg" alt="" />
                </span>
            </div>


            <div
                className={cn('transition-all overflow-hidden duration-300 ease-linear', { 'max-h-0 ': !isOpen || !isEnabled, 'max-h-screen ': isOpen && isEnabled})}
            >


                <div className='pt-8'>

                    <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-[10px]'>
                        {
                            choices.map((choice, index) => <AccordionItem item={choice} key={index} type={item.type} selectedID={item.selectedID} index={index} />)
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Accordion
