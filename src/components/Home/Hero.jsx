import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
    const initial = {

    }
    return (
        <section>
            <div className="container  ">
                <div className='px-10 py-[100px] rounded-10 overflow-hidden flex flex-col items-center bg-[url("/public/home/mobile/image-hero-coffeepress.jpg")] bg-cover 
                md:pr-0  md:pl-[58px] md:items-start md:py-[104px] md:bg-[url("/public/home/tablet/image-hero-coffeepress.jpg")] ' >

                    <div className='md:max-w-[398px] '>
                        <motion.h1
                            className='heading-1 text-white mb-6'
                            whileInView={true}
                            animate={{ opacity: 1, translateY: 0 }}
                            initial={{ opacity: 0, translateY: '-40px' }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Great coffee made simple.
                        </motion.h1 >
                        <motion.p
                            className='body-text text-light-cream mb-8 md:mb-10'
                            whileInView={true}
                            animate={{ opacity: 1, translateY: 0 }}
                            initial={{ opacity: 0, translateY: '-40px' }}
                            transition={{ duration: .7, delay: .3 }}
                            viewport={{ once: true }}
                        >
                            Start your mornings with the world’s best coffees. Try our expertly curated artisan
                            coffees from our best roasters delivered directly to your door, at your schedule.
                        </motion.p>
                        <motion.a
                            className='btn' href="#"
                            whileInView={true}
                            animate={{ opacity: 1, translateY: 0 }}
                            initial={{ opacity: 0, translateY: '-40px' }}
                            transition={{ duration: .7, delay: .6 }}
                            viewport={{ once: true }}
                        >
                            Create your plan
                        </motion.a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
