import React from 'react'
import Accordion from './Accordion'
import { Store } from '../../../store/app-store'
import { DRINK_TYPE } from '../../../store/types';

function DrinkTypeAccordion() {
    const { drinkTypeAccordionData} = Store( store => store );
    return (
        <>
            <Accordion item={drinkTypeAccordionData} type={DRINK_TYPE}  />
        </>
    )
}

export default DrinkTypeAccordion
