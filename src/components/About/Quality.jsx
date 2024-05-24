import React from 'react'

function Quality() {
    return (
        <section className='mt-[120px] md:mt-[144px] lg:mt-[168px] '>
            <div className="container ">



                <div className="relative flex flex-col gap-y-[64px] pb-[60px] md:pb-[67px] lg:flex-row lg:px-[85px] lg:gap-x-[125px] lg:pb-[88px]  ">

                    <div className='bg-dark-grey-blue left-0 right-0 top-[78px] bottom-0 absolute -z-10 rounded-10 md:top-[160px] lg:top-[88px] '></div>

                    <div className='mx-6 rounded-10 overflow-hidden md:mx-[58px] lg:w-[445px] lg:order-2 lg:shrink-0 lg:mx-0 '>
                        <picture>
                            <source media='(min-width : 1024px)' srcSet='/public/about/desktop/image-quality.jpg' />
                            <source media='(min-width:768px)' srcSet='/public/about/tablet/image-quality.jpg' />
                            <img src="/public/about/mobile/image-quality.jpg" alt="" className='w-full object-cover' />
                        </picture>
                    </div>

                    <div className='text-center px-6 flex flex-col gap-y-6 md:px-[74px] lg:text-left lg:px-0 lg:mt-[176px]    '>
                        <h2 className="heading-2 text-white ">Uncompromising quality</h2>
                        <p className="body-text text-light-cream/80 break-keep ">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                            consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Quality
