import React from 'react'
import Header from '../components/Common/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Common/Footer/Footer'


function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

export default Layout
