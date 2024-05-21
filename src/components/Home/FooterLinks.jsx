import React from 'react'

function FooterLinks() {
    const links = ['home','about us','create your plan']
    return (
        <ul className='mt-12 flex flex-col items-center gap-y-6'>
            {links.map( (link,index) => (
                <li key={index}>
                    <a href="#" className='text-center uppercase mx-auto block font-barlow text-[12px] leading-[15px] tracking-[1px] text-grey font-bold   '>{link}</a>
                </li>
            ))}
        </ul>
    )
}

export default FooterLinks
