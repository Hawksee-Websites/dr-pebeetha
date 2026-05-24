import React from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/Appointment.css'

function Appointment() {
    return (
        <div className='Appointment'>
            <div className="container">
                <div className="content"data-aos="fade-right"data-aos-duration="1000">
                    <h2>Book Today, Thrive Tomorrow: Streamlined Appointments for ENT Wellness</h2>
                    <Link to='/appointment' >Make an Appointment</Link>
                </div>
            </div>
        </div>
    )
}

export default Appointment