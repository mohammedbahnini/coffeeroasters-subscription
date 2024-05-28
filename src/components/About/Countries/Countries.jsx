import React from 'react'
import CountriesList from './CountriesList'

function Countries() {
    const countries = [
        {
            map: <img src='/about/desktop/illustration-uk.svg' />,
            name: 'United Kingdom',
            address: {
                avenue: '68  Asfordby Rd',
                city: 'Alcaston',
                region: 'SY6 1YA',
                phone: '+44 1241 918425'
            }
        },
        {
            map: <img src='/about/desktop/illustration-canada.svg' />,
            name: 'Canada',
            address: {
                avenue: '1528  Eglinton Avenue',
                city: 'Toronto',
                region: 'Ontario M4P 1A6',
                phone: '+1 416 485 2997'
            }
        },
        {
            map: <img src='/about/desktop/illustration-australia.svg' />,
            name: 'Australia',
            address: {
                avenue: '36 Swanston Street',
                city: 'Kewell',
                region: 'Victoria',
                phone: '+61 4 9928 3629'
            }
        }
    ]
    return (
        <section className='mt-[120px] md:mt-[144px] '>
            <div className="container">
                <div className='lg:mx-[85px]'>
                    <h3 className="heading-4 text-center text-grey md:text-left">Our headquarters</h3>
                    <CountriesList countries={countries} />
                </div>
            </div>
        </section>
    )
}

export default Countries
