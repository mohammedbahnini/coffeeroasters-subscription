import React from 'react'
import CollectionItem from './CollectionItem'

function CollectionList() {
    const collections = [
        {
            img: '/public/home/desktop/image-gran-espresso.png',
            title: 'gran espresso',
            description: 'Light and flavorful blend with cocoa and black pepper for an intense experience'
        },
        {
            img: '/public/home/desktop/image-planalto.png',
            title: 'planalto',
            description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
        },
        {
            img: '/public/home/desktop/image-piccollo.png',
            title: 'piccollo',
            description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry '
        },
        {
            img: '/public/home/desktop/image-danche.png',
            title: 'danche',
            description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
        }
    ]
    return (
        <div className='flex flex-col gap-y-12 '>
            {
                collections.map((item, index) => <CollectionItem collection={item} key={index} />)
            }
        </div>
    )
}

export default CollectionList
