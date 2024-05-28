import React from 'react'
import { NavLink , useNavigate } from 'react-router-dom';

function MenuLinks(props) {
    const { links , setMenuIsIsOpen } = props;
    const navigate = useNavigate();

    const handleClick = ()=>{
        setMenuIsIsOpen(false);
        document.body.style.overflowY = 'auto';
    }

    return (
        <>
            <ul className='flex flex-col items-center gap-y-8'>
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.to} className='font-black text-2xl capitalize ' onClick={handleClick} >{link.text}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default MenuLinks
