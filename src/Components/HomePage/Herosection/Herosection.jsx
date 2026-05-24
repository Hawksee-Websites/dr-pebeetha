import React from 'react';
import '../../../styles/Herosection.css'
import { Link } from 'react-router-dom';

function Herosection() {
    
    return (
        <div className='Herosection'>
            <div className="container">
                <div className="row">
                    <div className="col"data-aos="fade-right"data-aos-duration="1000">
                        <h1>Hey, I'm <span>Dr. Pebeetha</span>, your dedicated ENT Surgeon</h1>
                        <p>Navigate your wellness journey with our expert ENT Surgeon and Digital health coach.</p>
                        <Link to={'/about'}>Read More</Link>
                    </div>
            
                </div>

            </div>
        </div>
    )
}

export default Herosection