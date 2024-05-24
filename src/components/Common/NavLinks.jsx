import React from 'react'
import { NavLink } from 'react-router-dom';

function NavLinks(props) {
    const { links } = props;

    return (
        <nav className='hidden md:block'>
            <ul className='flex gap-x-8 ' >
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                className='uppercase font-barlow text-xs leading-[15px] tracking-[1px] font-bold text-grey hover:text-dark-grey-blue transition-colors duration-200'
                                to={link.to}
                            >
                                {link.text}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavLinks
