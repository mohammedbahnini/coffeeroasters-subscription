import React, { useState } from 'react'
import Menu from './Menu';

function Header() {
    const [menuOpen, setMenuIsIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuIsIsOpen(prev => !prev);
        document.body.style.overflowY = !menuOpen ? 'hidden' : 'auto';
    }

    return (
        <>
            <header className=''>
                <div className="container pt-8 pb-10">
                    <div className="flex justify-between ">
                        <a href="#">
                            <img src='/public/shared/desktop/logo.svg' alt="" className='w-[163px]' />
                        </a>

                        <span className='block' onClick={handleToggleMenu}>
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
            <Menu menuOpen={menuOpen} />


        </>
    )
}

export default Header
