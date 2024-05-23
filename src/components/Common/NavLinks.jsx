import React from 'react'

function NavLinks(props) {
    const { links } = props;

    return (
        <nav className='hidden md:block'>
            <ul className='flex gap-x-8 ' >
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <a href={link.to} className='uppercase font-barlow text-xs leading-[15px] font-bold text-grey hover:text-dark-grey-blue transition-colors duration-200'>{link.text}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavLinks
