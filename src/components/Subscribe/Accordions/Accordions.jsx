import React from 'react'
import Accordion from './Accordion';


function Accordions(props) {
    const { items } = props;

    return (
        <div className='flex flex-col gap-y-24 md:gap-y-[88px] '>
            {
                items.map((item, index) => <Accordion item={item} key={index} index={index} />)
            }
        </div>
    )
}

export default Accordions
