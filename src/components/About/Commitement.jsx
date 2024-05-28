import React from 'react'
import { motion } from 'framer-motion'

function Commitement() {
    return (
        <section className='mt-[120px]'>
            <div className="container">

                <div className="flex flex-col md:flex-row md:items-center md:gap-x-[70px] lg:gap-x-[125px] lg:px-[85px] ">

                    <motion.div 
                    className='rounded-10 overflow-hidden md:w-[280px] md:shrink-0 lg:w-[445px]'
                    initial={{ opacity : 0 , y : '-40px' }}
                    transition={{ duration : 1 , type : "spring" }}
                    viewport={{ once : true , amount : 0.3}}
                    whileInView={{ opacity : 1 , y : 0 }}
                    >
                        <picture>
                            <source media='(min-width : 1024px)' srcSet='/about/desktop/image-commitment.jpg' />
                            <source media='(min-width : 768px)' srcSet='/about/tablet/image-commitment.jpg' />
                            <img src="/about/mobile/image-commitment.jpg" alt="" className='w-full  object-cover' />
                        </picture>
                    </motion.div>

                    <motion.div 
                    className='mt-12 text-center flex flex-col gap-y-[30px] md:text-left md:mt-0 md:pb-6   '
                    initial={{ opacity : 0 , y : '40px' }}
                    transition={{ duration : 1 , type : "spring" }}
                    viewport={{ once : true , amount : 0.3}}
                    whileInView={{ opacity : 1 , y : 0 }}
                    >
                        <h2 className="heading-2 text-dark-grey-blue ">Our commitement</h2>
                        <p className="body-text text-grey">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                    </motion.div>

                </div>
            </div>

        </section>
    )
}

export default Commitement
