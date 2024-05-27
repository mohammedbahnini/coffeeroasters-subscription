import React from 'react'
import Header from '../components/Common/Header'
import Hero from '../components/Home/Hero'
import Collection from '../components/Home/Collection'
import Features from '../components/Home/Features'
import Steps from '../components/Home/Steps'

function Home() {
    return (
        <>
            <Hero />
            <Collection />
            <Features />
            <Steps />
        </>
    )
}

export default Home
