import React from 'react'
import Navbar from '../Components/GeneralCmpnts/Navbar/Navbar'
import Footer from '../Components/GeneralCmpnts/Footer/Footer'
import AppointmentOptions from '../Components/AppointmentPage/AppointmentOptions/AppointmentOptions'
import BannerSection from '../Components/GeneralCmpnts/BannerSection/BannerSection'
import BannerData from '../Components/Helpers/BannerData'

export default function AppointmentPage() {
    const { AppointmentH2, AppointmentImg } = BannerData;

    return (
        <div className='AppointmentPage'>
            <Navbar />
            <BannerSection h2={AppointmentH2} imgUrl={AppointmentImg}/>
            <AppointmentOptions />
            <Footer />
        </div>
    )
}
