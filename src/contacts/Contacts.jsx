import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactus from '../components/Contactus'

const Contacts = () => {
  return (
    <>
    <Navbar/>
    <div className=' min-h-screen flex justify-center items-center'>
     <Contactus/>
    </div>
    <Footer/>
    </>
  )
}

export default Contacts