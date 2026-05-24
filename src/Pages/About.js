import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/GeneralCmpnts/Navbar/Navbar'
import BannerSection from '../Components/GeneralCmpnts/BannerSection/BannerSection'
import BannerData from '../Components/Helpers/BannerData'
import AboutIntro from '../Components/HomePage/AboutIntro/AboutIntro'
import Profile from '../Components/AboutPage/Profile/Profile'
import Mission from '../Components/AboutPage/Mission/Mission'
import Footer from '../Components/GeneralCmpnts/Footer/Footer'
import Appointment from '../Components/GeneralCmpnts/Appointment/Appointment'

function About() {
    const { AboutH2, AboutImg } = BannerData;


    return (
        <div className='About'>
            <Navbar />
            <BannerSection h2={AboutH2} imgUrl={AboutImg} />
            <Profile/>
            <Mission/>
            <Appointment/>
            <Footer/>
        </div>
    )
}

export default About