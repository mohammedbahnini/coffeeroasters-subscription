import React from 'react'
import { motion } from 'framer-motion';

function FeatureItem(props) {
    const { feature , index } = props;

    return (
        <motion.div
            className='text-center md:text-left text-light-cream bg-dark-cyan rounded-lg px-3 pt-[72px] pb-[50px] 
            md:py-10 md:pr-12 md:pl-[70px] md:flex md:flex-row md:items-center md:gap-x-[55px] 
            lg:flex-col lg:items-center lg:text-center lg:gap-y-14 lg:px-12 lg:pt-[72px] lg:pb-12  '
            initial={{ opacity: 0, translateY: '50%' }}
            transition={{ duration: 0.7  , delay : index * 0.2 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className=' md:shrink-0 w-[72px] md:w-[56px] lg:w-[72px] aspect-square grid place-items-center mx-auto '>
                <img src={feature.icon} alt={feature.title} className='mx-auto   ' />
            </div>
            <div  >
                <h4 className="heading-4 mt-[56px] md:mt-0  ">{feature.title}</h4>
                <p className="body-text mx-[22px] mt-6 md:mt-4 md:mx-0 lg:mt-6 ">{feature.description}</p>
            </div>
        </motion.div>

    )
}

export default FeatureItem
