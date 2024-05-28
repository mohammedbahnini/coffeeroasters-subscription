import React from 'react'
import { Link } from 'react-router-dom'

function FooterLinks() {
    const links = [
        {
            text: 'home',
            to: ''
        },
        {
            text: 'about us',
            to: 'about'
        },
        {
            text: 'create your plan',
            to: 'subscribe'
        }
    ];
    return (
        <ul className='mt-12 flex flex-col items-center gap-y-6 md:flex-row  md:gap-x-8 lg:mt-0 lg:flex-1 lg:ml-[102px] '>
            {links.map( (link,index) => (
                <li key={index}>
                    <Link to={link.to} className='text-center uppercase mx-auto block font-barlow text-[12px] leading-[15px] tracking-[1px] text-grey hover:text-white font-bold   '>{link.text}</Link>
                </li>
            ))}
        </ul>
    )
}

export default FooterLinks
