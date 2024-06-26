import React from 'react'
import cn from 'classnames';
import MenuLinks from './MenuLinks';

function Menu(props) {
    const { menuOpen , links , setMenuIsIsOpen } = props;



    return (
        <div className={cn('pt-10 w-full absolute z-20 top-[90px] bottom-0  bg-gradient-to-b from-white to-transparent transition-transform duration-200  ', {
            'translate-x-0': menuOpen,
            '-translate-x-full': !menuOpen
        })}>
            <MenuLinks links={links} setMenuIsIsOpen={setMenuIsIsOpen} />
        </div>
    )
}

export default Menu
