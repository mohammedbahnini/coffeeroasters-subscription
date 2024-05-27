import React, { useState } from 'react'
import { Store } from '../../store/app-store'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import cn from 'classnames';
import { transform } from 'framer-motion';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const OrderSummaryText = (props) => {
    const { bgClass, textColorClass  } = props;

    const {
        drinkTypePlaceholder,
        coffeeTypePlaceholder,
        quantityPlaceholder,
        grindPlaceholder,
        deliveryPlaceholder,
        drinkTypePrefix,
        grindIsEnable
    } = Store(store => store);



    return (
        <div className={cn(bgClass)}>

            <p className={cn('modal-description', textColorClass)}>
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
        deliverySelectedID,
        price,
        priceMultiplyedBy
    } = Store(store => store);



    const btnOrderEnabled =
        drinkTypeSelectedID &&
        coffeeTypeSelectedID &&
        quantitySelectedID &&
        (grindIsEnable ? grindTypeSelectedID : true) &&
        deliverySelectedID;


    const [modalVisible, setModalVisible] = useState(false);



    return (
        <div>

            <div className='mt-[120px] md:mt-[144px] flex flex-col items-center lg:items-end '>
                <div className='bg-dark-grey-blue rounded-10 py-8 px-6 md:py-7 md:px-11 lg:py-[47px] lg:px-16 '>
                    <p className='uppercase font-barlow leading-[26px] text-white/50 mb-2'>order summary</p>
                    <OrderSummaryText bgClass='bg-dark-blue' textColorClass='text-white'   />
                </div>

                <button
                    className='btn block mt-14 disabled:cursor-auto disabled:bg-grey-disabled-btn  '
                    disabled={!btnOrderEnabled}
                    onClick={() => setModalVisible(true)}
                >Create my plan!</button>

            </div>


            <Modal
                open={modalVisible}
                showCloseIcon={false}
                center
                closeOnOverlayClick={true}
                classNames={{
                    modal: 'p-0 max-w-[588px] mx-6'
                }}
                onClose={() => setModalVisible(false)}
            >
                <div className='modal-header py-7 px-6 md:pt-12 md:pb-10 md:px-[56px] bg-dark-grey-blue text-white capitalize'>order summary</div>
                <div className='p-6 pt-10 md:p-[56px]  '>
                    
                    <OrderSummaryText bgClass='bg-white' textColorClass='text-grey'/>
                    <p className='md:mt-2 body-text text-dark-grey-blue '>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>

                    <div className=' gap-x-4 items-center mt-12 hidden invisible md:flex md:visible'>
                        <p className=' text-[32px] leading-8 font-black text-dark-grey-blue'>${price * priceMultiplyedBy} / mo</p>
                        <button className='btn' onClick={() => setModalVisible(false)}>Checkout</button>
                    </div>

                    <button
                        className='btn md:hidden md:invisible w-full text-center mt-6'
                        onClick={() => setModalVisible(false)}
                    >Checkout - ${price * priceMultiplyedBy} / mo</button>
                </div>
            </Modal>
        </div>
    )
}

export default OrderSummary
