import React from 'react';
import '../../../styles/AppointmentIframe.css'


function AppointmentIframe() {
  return (
    <div className='AppointmentIframe'>
        <div className="container">
            <iframe src="https://calendly.com/drpebeetha/online-consultation" frameBorder="0"></iframe>
        </div>
    </div>
  )
}

export default AppointmentIframe