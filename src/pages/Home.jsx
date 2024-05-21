import React from 'react'
import Header from '../components/Common/Header'
import Hero from '../components/Home/Hero'
import Collection from '../components/Home/Collection'
import Features from '../components/Home/Features'
import Steps from '../components/Home/Steps'
import Footer from '../components/Home/Footer'

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Collection />
            <Features />
            <Steps />
            <Footer />
        </>
    )
}

export default Home
