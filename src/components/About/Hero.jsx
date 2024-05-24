import React from 'react'

function Hero() {
    return (
        <section>
            <div className="container ">

                <div className='bg-[url("/public/about/mobile/image-hero-whitecup.jpg")] bg-cover rounded-10
                md:bg-[url("/public/about/tablet/image-hero-whitecup.jpg")]
                lg:bg-[url("/public/about/desktop/image-hero-whitecup.jpg")]    '>

                    <div className=' mx-6 pt-[111px] pb-[87px] text-center  
                    md:max-w-[398px] md:text-left md:py-[118px] md:ml-[58px]
                    lg:max-w-[445px] lg:ml-[85px] lg:py-[137px] '>
                        <h1 className="heading-2 capitalize text-white">about us</h1>
                        <p className='body-text text-light-cream/80 mt-6'>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero
