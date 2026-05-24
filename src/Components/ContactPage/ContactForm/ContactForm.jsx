import React, { useRef, useState } from 'react';
import '../../../styles/ContactForm.css';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReCAPTCHA from "react-google-recaptcha";


function ContactForm() {

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
        message: ''
    });



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cvzt7ws', 'template_4napxsk', form.current, '-HGpvb7HTQHYwnBNI')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                toast.success('Message Sent! Your message has been sent successfully.');
                // Reset the form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
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

    return (
        <div className='ContactForm'>
            <div className='container'>
                <div className='row'>
                    <div className='card'>
                        <div className='col left'>
                            <h3>Get In Touch</h3>
                            <form ref={form} onSubmit={sendEmail}>
                                <div>
                                    <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='Name' required title="Enter your full name(maximum 30 characters)"maxLength={30}/>
                                </div>
                                <div>
                                    <input type='email' id='email' name='email' value={formData.email} onChange={handleInputChange} placeholder='Email'required />
                                </div>
                                <div>
                                    <input type='text' id='phone' name='phone' value={formData.phone} onChange={handleInputChange} placeholder='Phone'required pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number"/>
                                </div>
                                <div>
                                    <textarea id='message' name='message' value={formData.message} onChange={handleInputChange} placeholder='Message' rows={4} maxLength={500}title="Enter your message (maximum 500 characters)" required />
                                </div>
                                <ReCAPTCHA
                                    sitekey="6Lff_HApAAAAAMLe6awA1hUTrf5Q5GPX8weBJ0EY"
                                    onChange={onChange}
                                />
                                <button type='submit' disabled={!verified}>Submit</button>


                            </form>
                        </div>
                        <div className='col right'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15651.163450537377!2d75.785193!3d11.2767784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6596ce427c4f9%3A0x639a83a8aeb7035a!2sKozhikode%20District%20Co-Operative%20Hospital%20Ltd%20%7C%20Best%20Hospital%20in%20Calicut!5e0!3m2!1sen!2sin!4v1707809942786!5m2!1sen!2sin'
                                width='100%'
                                height='100%'
                                allowFullScreen=''
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            ></iframe>
                        </div>
                    </div>
                    <div className='bottom-section'>
                        <div className='bottom-card'>
                            <div className='icon'>
                                <a href="https://maps.google.com/maps?ll=11.276778,75.785193&z=13&t=m&hl=en&gl=IN&mapclient=embed&cid=7177193716677280602">
                                    <img src='img/contact_icons/location.png' alt='location icon' />

                                </a>
                            </div>
                            <div className='content'>
                                <h3>Location</h3>
                                <p>District Co-Operative Hospital Ltd,
                                    <br />
                                    Mini Bypass Rd, Eranhipaalam,
                                    <br />

                                    Kozhikode, Kerala </p>
                            </div>
                        </div>
                        <div className='bottom-card'>
                            <div className='icon'>
                                <a href="mailto:drpabeethaclinicsm@gmail.com">
                                    <img src='img/contact_icons/mail.png' alt='mail icon' />
                                </a>
                            </div>
                            <div className='content'>
                                <h3>Mail</h3>
                                <p>
                                    <a href='mailto:drpabeethaclinicsm@gmail.com'>drpabeethaclinicsm@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className='bottom-card'>
                            <div className='icon'>
                                <a href="tel:+919495037393">
                                    <img src='img/contact_icons/phone-call.png' alt='contact icon' />

                                </a>
                            </div>
                            <div className='content'>
                                <h3>Contact</h3>
                                <p>
                                    <a href='tel:+919495037393'>+919495037393</a>
                                </p>
                            </div>
                        </div>
                    </div>
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
    );
}

export default ContactForm;
