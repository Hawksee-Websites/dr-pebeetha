import React from 'react';
import '../../../styles/ServiceDesc.css'

function ServiceDesc() {
    return (
        <div className='ServiceDesc'>
            <div className="container">
                <div className="row">
                    <div className="left-col custom-fade-right" data-aos="custom-fade-right" data-aos-duration="1000">
                        <h2>Comprehensive ENT Care Tailored to You: Our Range of Specialized Services</h2>
                        <p>At Dr.Pebeetha's clinic, we take pride in offering a diverse range of specialized services designed to address your unique ear, nose, and throat needs. From precise diagnostics to personalized treatments, our dedicated team is committed to providing top-tier care. Whether you're seeking solutions for hearing issues, sinus problems, or throat disorders, our comprehensive services aim to enhance your well-being.
                            <br></br>
                            <br></br>
                            Look below to explore the full spectrum of services we offer, each crafted to cater to your individual ear, nose, and throat health needs.
                        </p>

                    </div>
                    <div className="right-col custom-fade-left" data-aos="custom-fade-left" data-aos-duration="1000">
                        <img src="img/service-intro.jpg" alt="service intro" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceDesc