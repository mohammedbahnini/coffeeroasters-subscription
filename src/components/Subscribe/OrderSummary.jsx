import React, { useState } from 'react'
import { Store } from '../../store/app-store'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import cn from 'classnames';

const OrderSummaryText = (props) => {
    const {
        bgClass,
        textColorClass,
        drinkTypePlaceholder,
        coffeeTypePlaceholder,
        quantityPlaceholder,
        grindPlaceholder,
        deliveryPlaceholder,
        drinkTypePrefix,
        grindIsEnable
    } = props;

    return (
        <div className={cn(bgClass)}>

            <p className={cn('font-black text-2xl leading-10', textColorClass)}>
                “I drink my coffee {drinkTypePrefix} <span className='text-dark-cyan'>{drinkTypePlaceholder}</span>, with a <span className='text-dark-cyan'>{coffeeTypePlaceholder}</span> type of bean. <span className='text-dark-cyan'>{quantityPlaceholder}</span> {
                    grindIsEnable && (
                        <>
                            <span> ground ala </span>
                            <span className='text-dark-cyan'>{grindPlaceholder}</span>,
                        </>
                    )
                } sent to me <span className='text-dark-cyan'>{deliveryPlaceholder}</span>.”
            </p>
        </div>
    )
}


function OrderSummary(props) {
    const {
        drinkTypePlaceholder,
        coffeeTypePlaceholder,
        quantityPlaceholder,
        grindPlaceholder,
        deliveryPlaceholder,
        drinkTypePrefix,
        grindIsEnable,
        drinkTypeSelectedID,
        coffeeTypeSelectedID,
        quantitySelectedID,
        grindTypeSelectedID,
        deliverySelectedID
    } = Store(store => store);



    const btnOrderEnabled =
        drinkTypeSelectedID &&
        coffeeTypeSelectedID &&
        quantitySelectedID &&
        (grindIsEnable ? grindTypeSelectedID : true) &&
        deliverySelectedID;


    const [modalVisible, setModalVisible] = useState(false);
    const totalPrice = 0;


    return (
        <div>

            <div className='mt-[120px] md:mt-[144px] flex flex-col items-center lg:items-end '>
                <div className='bg-dark-grey-blue rounded-10 py-8 px-6 md:py-7 md:px-11 lg:py-[47px] lg:px-16 '>
                    <p className='uppercase font-barlow leading-[26px] text-white/50'>order summary</p>
                    <p className='text-white mt-2 font-black text-2xl leading-10'>“I drink my coffee {drinkTypePrefix} <span className='text-dark-cyan'>{drinkTypePlaceholder}</span>, with a <span className='text-dark-cyan'>{coffeeTypePlaceholder}</span> type of bean. <span className='text-dark-cyan'>{quantityPlaceholder}</span> {
                        grindIsEnable && (
                            <>
                                <span> ground ala </span>
                                <span className='text-dark-cyan'>{grindPlaceholder}</span>,
                            </>
                        )
                    } sent to me <span className='text-dark-cyan'>{deliveryPlaceholder}</span>.”</p>
                </div>

                <button
                    className='btn block mt-14 disabled:cursor-auto disabled:bg-grey-disabled-btn  '
                    disabled={!btnOrderEnabled}
                    onClick={() => setModalVisible(true)}
                >Create my plan!</button>

            </div>

            <Rodal
                onClose={() => null}
                visible={modalVisible}
                showCloseButton={false}
                customStyles={{
                    width: '1000px',
                    maxWidth: '540px',
                    padding: '0',
                    height: 'fit-content'
                }}
            >
                <div className='text-[40px] pt-12 pb-10 px-[56px] bg-dark-grey-blue text-white capitalize font-black'>order summary</div>
                <div className='p-[56px]'>
                    <OrderSummaryText
                        bgClass='bg-white'
                        textColorClass='text-grey'
                        drinkTypePlaceholder={drinkTypePlaceholder}
                        coffeeTypePlaceholder={coffeeTypePlaceholder}
                        quantityPlaceholder={quantityPlaceholder}
                        grindPlaceholder={grindPlaceholder}
                        deliveryPlaceholder={deliveryPlaceholder}
                        drinkTypePrefix={drinkTypePrefix}
                        grindIsEnable={grindIsEnable}
                    />
                    <p className='mt-2 body-text text-dark-grey-blue '>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
                    
                    <div className='flex gap-x-4 items-center mt-12 '>
                        <p className='text-[32px] leading-8 font-black text-dark-grey-blue'>${totalPrice} / mo</p>
                        <button className='btn'>Checkout</button>
                    </div>
                </div>

            </Rodal>
        </div>
    )
}

export default OrderSummary
