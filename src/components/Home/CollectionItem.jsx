import React from 'react'

function CollectionItem(props) {
    const { collection } = props;

    return (
      <div className='text-center text-dark-grey-blue'>
        <img src={collection.img} alt={collection.title} className='w-[200px] mx-auto ' />
        <h2 className="heading-4 capitalize ">{collection.title}</h2>
        <p className="body-text mt-4">{collection.description}</p>
      </div>
    )
}

export default CollectionItem
