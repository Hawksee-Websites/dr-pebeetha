import React from 'react'
import Navbar from '../Components/GeneralCmpnts/Navbar/Navbar'
import AppointmentIframe from '../Components/AppointmentPage/AppointmentIframe/AppointmentIframe'
import Footer from '../Components/GeneralCmpnts/Footer/Footer'

function OnlineAppointment() {
    return (
        <div className='OnlineAppointment'>
            <Navbar />
            <AppointmentIframe />
            <Footer />
        </div>
    )
}

export default OnlineAppointment