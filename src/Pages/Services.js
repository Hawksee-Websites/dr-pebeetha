import React, { useContext, useEffect } from 'react'
import BannerData from '../Components/Helpers/BannerData'
import Navbar from '../Components/GeneralCmpnts/Navbar/Navbar'
import BannerSection from '../Components/GeneralCmpnts/BannerSection/BannerSection'
import ServiceList from '../Components/ServicePage/ServiceList/ServiceList'
import Footer from '../Components/GeneralCmpnts/Footer/Footer'
import Appointment from '../Components/GeneralCmpnts/Appointment/Appointment'
import ServiceDesc from '../Components/ServicePage/ServiceDesc/ServiceDesc'

function Services() {
    const { ServicesH2, ServicesImg } = BannerData;

    return (
        <div className='Services'>
            <Navbar />
            <BannerSection h2={ServicesH2} imgUrl={ServicesImg} />
            <ServiceDesc />
            <ServiceList />
            <Appointment />
            <Footer />
        </div>
    )
}

export default Services