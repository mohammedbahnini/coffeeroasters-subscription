import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section>
            <div className="container ">

                <div className='bg-[url("/about/mobile/image-hero-whitecup.jpg")] bg-cover rounded-10
                md:bg-[url("/about/tablet/image-hero-whitecup.jpg")]
                lg:bg-[url("/about/desktop/image-hero-whitecup.jpg")]    '>

                    <div className=' mx-6 pt-[111px] pb-[87px] text-center  
                    md:max-w-[398px] md:text-left md:py-[118px] md:ml-[58px]
                    lg:max-w-[445px] lg:ml-[85px] lg:py-[137px] '>
                        <motion.h1
                        className="heading-2 capitalize text-white"
                        whileInView={true}
                        animate={{ opacity: 1, translateY: 0 }}
                        initial={{ opacity: 0, translateY: '-40px' }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        >about us</motion.h1>
                        <motion.p 
                        className='body-text text-light-cream/80 mt-6'
                        whileInView={true}
                        animate={{ opacity: 1, translateY: 0 }}
                        initial={{ opacity: 0, translateY: '-40px' }}
                        transition={{ duration: .7, delay: .3 }}
                        viewport={{ once: true }}
                        >Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</motion.p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero
