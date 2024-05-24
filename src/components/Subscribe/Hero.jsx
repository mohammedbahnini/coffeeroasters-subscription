import React from 'react'

function Hero() {
    return (
        <section>
            <div className="container">

                <div className='px-6 pt-[100px] pb-[136px] bg-[url("/public/plan/mobile/image-hero-blackcup.jpg")] bg-cover rounded-10 overflow-hidden
                md:pl-[58px] md:py-[126px] md:bg-[url("/public/plan/tablet/image-hero-blackcup.jpg")]
                lg:pl-[85px] ld:py-[134px] lg:bg-[url("/public/plan/desktop/image-hero-blackcup.jpg")]   '>

                    <div className='text-center flex flex-col gap-y-6 md:text-left md:max-w-[398px] lg:max-w-[486px] lg:gap-y-8 '>
                        <h1 className="heading-1 text-white ">Create a plan</h1>
                        <p className="body-text text-light-cream/80">Build a subscription plan that best fits your needs. We offer an assortment of the best
                            artisan coffees from around the globe delivered fresh to your door.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Hero
