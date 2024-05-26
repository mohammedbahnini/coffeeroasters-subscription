import React from 'react'
import { Store } from '../../../store/app-store'
import { QUANTITY_TYPE } from '../../../store/types';
import Accordion from './Accordion';

function QuantityAccordion() {
    const { quantityAccordionData } = Store(store => store);
    return (
        <>
            <Accordion item={quantityAccordionData} type={QUANTITY_TYPE} />
        </>
    )
}

export default QuantityAccordion
