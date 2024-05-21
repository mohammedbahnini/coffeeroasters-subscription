import React from 'react'
import FooterLinks from './FooterLinks'
import FooterSocial from './FooterSocial'

function Footer() {
    return (
        <footer>
            <div className="container mt-[114px] mb-[72px] ">
                <div className="flex flex-col bg-dark-grey-blue py-[54px] ">
                    <a href="#" className='mx-auto'>
                        <img src="/public/shared/desktop/logo-white.svg" className='' alt="" />
                    </a>
                    <FooterLinks />
                    <FooterSocial />
                </div>
            </div>
        </footer>
    )
}

export default Footer
