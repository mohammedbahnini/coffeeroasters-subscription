import React from 'react'

function FooterLinks() {
    const links = ['home','about us','create your plan']
    return (
        <ul className='mt-12 flex flex-col items-center gap-y-6 md:flex-row  md:gap-x-8 lg:mt-0 lg:flex-1 lg:ml-[102px] '>
            {links.map( (link,index) => (
                <li key={index}>
                    <a href="#" className='text-center uppercase mx-auto block font-barlow text-[12px] leading-[15px] tracking-[1px] text-grey hover:text-white font-bold   '>{link}</a>
                </li>
            ))}
        </ul>
    )
}

export default FooterLinks
