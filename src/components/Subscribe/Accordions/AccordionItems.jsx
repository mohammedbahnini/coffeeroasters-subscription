import React from 'react'
import AccordionItem from './AccordionItem';

function AccordionItems(props) {
    const { items , type } = props;


    return (
        <div className='pt-8'>

            <div className='flex flex-col gap-y-4'>
                {
                    items.map((item, index) => <AccordionItem item={item} key={index} type={type} />)
                }
            </div>
        </div>
    )
}

export default AccordionItems
