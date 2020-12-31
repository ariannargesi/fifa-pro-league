import React from 'react'
import Navbar from '../../components/NavBar'
import Header from '../Header'
import Footer from '../Footer'

export default props => (
    <>
        <Navbar/>
        <Header/>
        {props.children}
        <Footer/>
    </>
)
