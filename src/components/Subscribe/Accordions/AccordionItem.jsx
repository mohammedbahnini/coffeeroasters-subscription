import React, { useState } from 'react'
import cn from 'classnames'
import { Store } from '../../../store/app-store';
import { COFFEE_TYPE, DELIVERY_TYPE, DRINK_TYPE, GRIND_TYPE, QUANTITY_TYPE } from '../../../store/types';

function AccordionItem(props) {
    const { item, type, selectedID } = props;
    const {
        setChoice,
        grindIsEnable
    } = Store(store => store);
    const isChecked =
        type === DRINK_TYPE && item.id === selectedID ||
        type === COFFEE_TYPE && item.id === selectedID ||
        type === QUANTITY_TYPE && item.id === selectedID ||
        type === GRIND_TYPE && item.id === selectedID ||
        type === DELIVERY_TYPE && item.id === selectedID;

    const isEnable = type === GRIND_TYPE ? (grindIsEnable) : true;

    const handleChoice = () => {
        setChoice(type, item.id, item.title)
    }
    return (
        <div
            className={cn(
                'flex-1 rounded-lg p-6  cursor-pointer transition-colors   duration-100 ease-in md:pt-8 md:pb-16  ', {
                'bg-dark-cyan text-white': isChecked && isEnable,
                'bg-seashell hover:bg-pale-orange text-dark-grey-blue': !isChecked && isEnable , 
                'pointer-events-none cursor-auto' : !isEnable ,
                'disabled' : !isEnable 
            }
            )}
            onClick={handleChoice}
        >
            <h4 className="heading-4 mb-2  ">{item.title}{isEnable}</h4>
            <p className='body-text'>{item.description}</p>
        </div>
    )
}

export default AccordionItem
