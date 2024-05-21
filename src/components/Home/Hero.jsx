import React from 'react'

function Hero() {
    return (
        <section>
            <div className="container  ">
                <div className='px-10 py-[100px] rounded-10 overflow-hidden flex flex-col items-center bg-[url("/public/home/mobile/image-hero-coffeepress.jpg")] bg-cover' >
                    {/* <img src='/public/home/mobile/image-hero-coffeepress.jpg' /> */}

                    <h1 className='heading-1 text-white mb-6'>Great coffee made simple.</h1>
                    <p className='body-text text-light-cream mb-8'>Start your mornings with the world’s best coffees. Try our expertly curated artisan
                        coffees from our best roasters delivered directly to your door, at your schedule.</p>
                    <a  className='btn' href="#">Create your plan</a>
                </div>

            </div>
        </section>
    )
}

export default Hero
