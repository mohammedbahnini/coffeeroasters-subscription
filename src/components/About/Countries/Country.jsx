import React from 'react'

function Country(props) {
    const { country } = props;
    return (
        <div className='md:flex-1'>

            <div className='flex flex-col items-center md:items-start'>
                {country.map}
            </div>

            <div className="text-center md:text-left">

                <h4 className="heading-3 leading-9 mt-12 md:text-2xl ">{country.name}</h4>

                <div className='font-barlow leading-[26px] text-dark-grey-blue mt-6 ' >
                    <p className="">{country.address.avenue}</p>
                    <p className="">{country.address.city}</p>
                    <p className="">{country.address.region}</p>
                    <p className="">{country.address.phone}</p>
                </div>

            </div>
        </div>
    )
}

export default Country
