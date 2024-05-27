import React from 'react'
import Hero from '../components/About/Hero'
import Commitement from '../components/About/Commitement'
import Quality from '../components/About/Quality'
import Countries from '../components/About/Countries/Countries'


function About() {
    return (
        <>
            <Hero />
            <Commitement />
            <Quality />
            <Countries />
        </>
    )
}

export default About