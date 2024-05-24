import React from 'react'
import Header from '../components/Common/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Home/Footer'

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
