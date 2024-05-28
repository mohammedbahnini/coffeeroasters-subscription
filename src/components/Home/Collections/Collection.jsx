import React from 'react'
import CollectionList from './CollectionList'

function Collection() {
    return (
        <section>
            <div className="container mt-[120px] relative md:mt-[144px] lg:mt-[136px]  ">
                <h2 className="gradient-title text-center bg-gradient-to-t from-light-cream to-grey text-transparent bg-clip-text mb-3
                md:absolute md:opacity-50 md:-translate-x-1/2 md:left-1/2 md:w-full md:mb-0 md:pt-7
                lg:pt-[86px] lg:pb-10 ">our collection</h2>
                <CollectionList />
            </div>
        </section>
    )
}

export default Collection
