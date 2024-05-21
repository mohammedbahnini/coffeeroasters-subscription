import React from 'react'
import CollectionList from './CollectionList'

function Collection() {
    return (
        <section>
            <div className="container mt-[120px] ">
                <h2 className="gradient-title text-center bg-gradient-to-t from-light-cream to-grey text-transparent bg-clip-text mb-3">our collection</h2>
                <CollectionList />
            </div>
        </section>
    )
}

export default Collection
