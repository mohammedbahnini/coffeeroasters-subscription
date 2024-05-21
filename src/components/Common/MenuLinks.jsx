import React from 'react'

function MenuLinks(props) {
    const { links } = props;

    return (
        <>
            <ul className='flex flex-col items-center gap-y-8'>
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <a href={link.to} className='font-black text-2xl capitalize '>{link.text}</a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default MenuLinks
