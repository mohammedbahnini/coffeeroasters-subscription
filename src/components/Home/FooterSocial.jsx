import React from 'react'

function FooterSocial() {
    const items = [
        {
            to: '#',
            ariaLabeledBy: 'facebook',
            icon: <i class="fa-brands fa-square-facebook"></i>
        },
        {
            to: '#',
            ariaLabeledBy: 'twitter',
            icon: <i class="fa-brands fa-x-twitter"></i>
        },
        {
            to: '#',
            ariaLabeledBy: 'instagram',
            icon: <i class="fa-brands fa-instagram"></i>
        }
    ]
    return (
        <ul className='flex justify-center gap-x-6 mt-12'>
            {items.map((item, index) => (
                <li>
                    <a href={item.to} aria-labelledby={item.ariaLabeledBy} className='text-white text-2xl '>{item.icon}</a>
                </li>
            ))}
        </ul>
    )
}

export default FooterSocial
