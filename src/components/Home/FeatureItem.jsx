import React from 'react'
import { motion } from 'framer-motion';

function FeatureItem(props) {
    const { feature } = props;

    return (
        <motion.div
            className='text-center md:text-left text-light-cream bg-dark-cyan rounded-lg px-3 pt-[72px] pb-[50px] 
            md:py-10 md:pr-12 md:pl-[70px] md:flex md:flex-row md:items-center md:gap-x-[55px]  '
            initial={{ opacity: 0, translateY: '50%' }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className=' md:shrink-0 '>
                <img src={feature.icon} alt={feature.title} className='mx-auto w-[72px] md:w-[56px]' />
            </div>
            <div  >
                <h4 className="heading-4 mt-[56px] md:mt-0  ">{feature.title}</h4>
                <p className="body-text mx-[22px] mt-6 md:mt-4 md:mx-0 ">{feature.description}</p>
            </div>
        </motion.div>

    )
}

export default FeatureItem
