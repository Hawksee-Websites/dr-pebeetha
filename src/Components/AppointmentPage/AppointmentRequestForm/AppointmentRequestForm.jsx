import React, { useRef, useState } from 'react';
import '../../../styles/AppointmentRequestForm.css'
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReCAPTCHA from "react-google-recaptcha";

function AppointmentRequestForm() {

    const form = useRef();
    const [verified, setVerified] = useState(false);

    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true);
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cvzt7ws', 'template_gb0do3g', form.current, '-HGpvb7HTQHYwnBNI')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                toast.success('Message Sent! Your message has been sent successfully.');
                // Reset the form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                toast.error('An error occurred. Please try again!');
            });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
      
        // Add leading zeros if month or day is less than 10
        if (month < 10) {
          month = `0${month}`;
        }
        if (day < 10) {
          day = `0${day}`;
        }
      
        return `${year}-${month}-${day}`;
      };
      
    return (
        <div className='AppointmentRequestForm'>
            <div className="container">
                <div className="card">
                    <h2>Request an Appointment</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <input type='text' id='name' name='name' placeholder='Full Name' required title="Enter your full name(maximum 30 characters)" value={formData.name} onChange={handleInputChange} maxLength={30} />
                        </div>
                        <div>
                            <input type='email' id='email' name='email' placeholder='Email' value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <input type='text' id='phone' name='phone' placeholder='Phone' pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" value={formData.phone} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <input type='date' id='date' name='date' placeholder='Date' value={formData.date} onChange={handleInputChange} min={getCurrentDate()}  required />
                        </div>
                        <div>
                            <textarea id='message' name='message' placeholder='Message' rows={4} maxLength={500} title="Enter your message (maximum 500 characters)" value={formData.message} onChange={handleInputChange} required />
                        </div>
                        <ReCAPTCHA
                            sitekey="6LertLkpAAAAADPHmsstzdkOlM57dm7No4-xktYp"
                            onChange={onChange}
                            className='recaptcha-align'
                        />
                        <button type='submit'disabled={!verified}>Submit</button>


                    </form>
                </div>


            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default AppointmentRequestForm