import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='text-center flex flex-col gap-y-10 mt-48 mx-10'>
            <h1 className="text-2xl font-black md:text-4xl lg:text-5xl">404 Page Not Found</h1>
            <p className='text-grey/70'>We could't find the page you are looking for , try go <Link to='/' className='text-blue-500'>home</Link> </p>
        </div>
    )
}

export default ErrorPage
