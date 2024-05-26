import React, { useState } from 'react'
import Accordions from './Accordions/Accordions'
import { Store } from '../../store/app-store'
import CoffeeTypeAccordion from './Accordions/CoffeeTypeAccordion';
import DrinkTypeAccordion from './Accordions/DrinkTypeAccordion';
import QuantityAccordion from './Accordions/QuantityAccordion';
import ChoicesLeft from './ChoicesLeft';
import OrderSummary from './OrderSummary';

function Choices() {

    const {
        accordions,
        drinkTypeSelectedID,
        coffeeTypeSelectedID,
        quantitySelectedID,
        grindTypeSelectedID,
        deliverySelectedID
    } = Store(store => store);


    return (
        <section className='mt-[120px] md:mt-[144px] '>

            <div className="container">

                <div className="flex gap-x-[125px] lg:px-[85px] ">
                    <ChoicesLeft />
                    <div className=''>
                        <Accordions items={accordions} />
                        <OrderSummary />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Choices
