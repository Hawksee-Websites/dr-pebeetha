import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/GeneralCmpnts/Navbar/Navbar'
import Herosection from '../Components/HomePage/Herosection/Herosection'
import AboutIntro from '../Components/HomePage/AboutIntro/AboutIntro'
import ServiceIntro from '../Components/HomePage/ServiceIntro/ServiceIntro'
import Testimonials from '../Components/HomePage/Testimonials/Testimonials'
import Appointment from '../Components/GeneralCmpnts/Appointment/Appointment'
import Footer from '../Components/GeneralCmpnts/Footer/Footer'

function Home() {

 
  return (
    <div className='Home'>
      <Navbar />
      <Herosection />
      <AboutIntro />
      <ServiceIntro />
      <Testimonials />
      <Appointment />
      <Footer/>
    </div>
  )
}

export default Home