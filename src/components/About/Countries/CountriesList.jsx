import React from 'react'
import Country from './Country';

function CountriesList(props) {
    const { countries } = props;


    return (
        <div className='mt-[72px] flex flex-col gap-y-20 md:flex-row '>
            {countries.map((country, index) => <Country country={country} key={index} />)}
        </div>
    )
}

export default CountriesList
