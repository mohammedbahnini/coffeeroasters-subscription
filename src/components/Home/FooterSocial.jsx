import React from 'react'

function FooterSocial() {
    const items = [
        {
            to: '#',
            ariaLabeledBy: 'facebook',
            icon: <i className="fa-brands fa-square-facebook"></i>
        },
        {
            to: '#',
            ariaLabeledBy: 'twitter',
            icon: <i className="fa-brands fa-x-twitter"></i>
        },
        {
            to: '#',
            ariaLabeledBy: 'instagram',
            icon: <i className="fa-brands fa-instagram"></i>
        }
    ]
    return (
        <ul className='flex justify-center gap-x-6 mt-12 lg:mt-0 '>
            {items.map((item, index) => (
                <li key={index}>
                    <a href={item.to} aria-labelledby={item.ariaLabeledBy} className='text-white hover:text-pale-orange text-2xl flex '>{item.icon}</a>
                </li>
            ))}
        </ul>
    )
}

export default FooterSocial
