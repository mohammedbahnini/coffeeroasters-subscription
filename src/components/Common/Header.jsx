import React, { useState } from 'react'
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu';

function Header() {
    const [menuOpen, setMenuIsIsOpen] = useState(false);
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

    const handleToggleMenu = () => {
        setMenuIsIsOpen(prev => !prev);
        document.body.style.overflowY = !menuOpen ? 'hidden' : 'auto';
    }

    return (
        <>
            <header className=''>
                <div className="container pt-8 pb-10 md:pt-10 md:pb-[53px] lg:py-11 ">
                    <div className="flex justify-between ">
                        <Link to='/' >
                            <img src='/shared/desktop/logo.svg' alt="" className='w-[163px] lg:w-auto' />
                        </Link>
                        <NavLinks links={links} />
                        <span className='block md:hidden' onClick={handleToggleMenu}>
                            {
                                menuOpen
                                    ?
                                    <img src='/shared/mobile/icon-close.svg' alt="" />
                                    :
                                    <img src='/shared/mobile/icon-hamburger.svg' alt="" />
                            }
                        </span>
                    </div>
                </div>


            </header>
            <Menu menuOpen={menuOpen} links={links} setMenuIsIsOpen={setMenuIsIsOpen} />


        </>
    )
}

export default Header
