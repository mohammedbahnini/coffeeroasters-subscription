import React from 'react'
import { motion } from 'framer-motion';

function Country(props) {
    const { country , index } = props;
    return (

        <motion.div
            className={`md:flex-1 `}
            initial={{ opacity: 0, y: '-40px' }}
            transition={{ duration: 1, type: "spring" , delay : index * 0.2  }}
            viewport={{ once: true, amount: 0.7 }}
            whileInView={{ opacity: 1, y: 0  }}
        >

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
        </motion.div>
    )
}

export default Country
