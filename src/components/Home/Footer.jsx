import React from 'react'
import FooterLinks from './FooterLinks'
import FooterSocial from './FooterSocial'

function Footer() {
    return (
        <footer className='mt-[114px] mb-[72px] lg:mt-[200px] lg:mb-[88px]'>
            <div className="container  ">
                <div className=" bg-dark-grey-blue  ">
                    <div className='flex flex-col md:items-center lg:flex-row lg:items-center py-[54px] lg:py-12 lg:px-[85px]'>

                        <a href="#" className='mx-auto lg:ml-0 '>
                            <img src="/public/shared/desktop/logo-white.svg" className='lg:w-[236px]' alt="" />
                        </a>
                        <FooterLinks />
                        <FooterSocial />

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
