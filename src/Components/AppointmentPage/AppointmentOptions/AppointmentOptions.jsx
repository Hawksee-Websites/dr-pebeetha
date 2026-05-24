import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/AppointmentOptions.css'

function AppointmentOptions() {
  return (
    <div className='AppointmentOptions'>
      <div className="container">
        <h2>Select Your Appointment Preference: Online or In-Person Consultation!</h2>
        <p><strong>Offline: </strong> Simply submit your appointment request, and we'll promptly reach out to you via email or phone to confirm your booking and connect with you.</p>
        <p><strong>Online: </strong>Experience convenience and flexibility by scheduling your appointment online. Connect with our experts from the comfort of your own space via video conferencing or chat platforms.</p>
        <div className="options">
          <Link to={'/appointment/offline'}>Offline</Link>
          <Link to={'/appointment/online'}>Online</Link>
        </div>
      </div>
    </div>
  )
}

export default AppointmentOptions