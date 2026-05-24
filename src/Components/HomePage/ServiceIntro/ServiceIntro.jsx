import React from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/ServiceIntro.css';


function ServiceIntro() {
    return (
        <div className='ServiceIntro'>
            <div className="container">
                <div className="row">
                    <div className="left-col custom-fade-right" data-aos="custom-fade-right" data-aos-duration="1000">
                        <div className="content">
                            <h3>Services</h3>
                            <h2>Your Journey to Wellness Begins Here: Unveiling Our Specialized ENT Services</h2>
                            <p>Welcome to Dr. Pebeetha's Clinic, where your well-being is our top priority. We specialize in ear, nose, and throat health, offering tailored care focused on your comfort and satisfaction. Our dedicated team provides precise diagnostics and personalized treatments, ensuring your journey to optimal health is met with expertise and compassion. Explore our comprehensive services designed to empower your senses and enhance your overall well-being</p>
                            <Link to={'/services'}>Read More</Link>
                        </div>
                    </div>
                    <div className="right-col custom-fade-left" data-aos="custom-fade-left" data-aos-duration="1000">
                        <div className="img-container first">
                            <img src="img/services/microsuction_ear_wax_removal_sm.jpg" alt="ent " />
                        </div>
                        <div className="img-container second">
                            <img src="img/ear-lobe-repair.jpg" alt="ear lobe " />
                        </div>
                        <div className="img-container third">
                            <img src="img/wax-removal.avif" alt="wax removal " />
                        </div>
                        <div className="img-container fourth">
                            <img src="img/Septoplasty.jpeg" alt="Septoplasty " />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceIntro