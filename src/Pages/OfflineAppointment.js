import React from 'react'
import Navbar from '../Components/GeneralCmpnts/Navbar/Navbar'
import Footer from '../Components/GeneralCmpnts/Footer/Footer'
import AppointmentRequestForm from '../Components/AppointmentPage/AppointmentRequestForm/AppointmentRequestForm'

function OfflineAppointment() {
  return (
    <div className='OfflineAppointment'>
        <Navbar/>
        <AppointmentRequestForm/>
        <Footer/>

    </div>
  )
}

export default OfflineAppointment