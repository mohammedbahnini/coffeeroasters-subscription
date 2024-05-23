import React, { useState } from 'react'
import Menu from './Menu';
import NavLinks from './NavLinks';

function Header() {
    const [menuOpen, setMenuIsIsOpen] = useState(false);
    const links = [
        {
            text: 'home',
            to: '#'
        },
        {
            text: 'about us',
            to: '#'
        },
        {
            text: 'create your plan',
            to: '#'
        }
    ];

    const handleToggleMenu = () => {
        setMenuIsIsOpen(prev => !prev);
        document.body.style.overflowY = !menuOpen ? 'hidden' : 'auto';
    }

    return (
        <>
            <header className=''>
                <div className="container pt-8 pb-10 md:pt-10 md:pb-[53px]">
                    <div className="flex justify-between ">
                        <a href="#">
                            <img src='/public/shared/desktop/logo.svg' alt="" className='w-[163px]' />
                        </a>
                        <NavLinks links={links} />
                        <span className='block md:hidden' onClick={handleToggleMenu}>
                            {
                                menuOpen
                                    ?
                                    <img src='/public/shared/mobile/icon-close.svg' alt="" />
                                    :
                                    <img src='/public/shared/mobile/icon-hamburger.svg' alt="" />
                            }
                        </span>
                    </div>
                </div>


            </header>
            <Menu menuOpen={menuOpen} links={links} />


        </>
    )
}

export default Header
