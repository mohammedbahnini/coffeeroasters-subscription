import React from 'react'
import { Oval } from 'react-loader-spinner'

function PageLoader() {
    return (
        <div className='fixed w-full h-svh bg-white z-40 top-0 left-0 grid place-items-center '>
            <Oval
                visible={true}
                height="80"
                width="80"
                secondaryColor="grey"
                color='#0E8784'
                ariaLabel="oval-loading"
                
            />

        </div>
    )
}

export default PageLoader
