import React from 'react'
import Accordion from './Accordion'
import { Store } from '../../../store/app-store'
import { COFFEE_TYPE } from '../../../store/types';

function CoffeeTypeAccordion() {
    const { coffeeTypeAccordionData } = Store(store => store);

    return (
        <>
            <Accordion item={coffeeTypeAccordionData} type={COFFEE_TYPE} />
        </>
    )
}

export default CoffeeTypeAccordion
