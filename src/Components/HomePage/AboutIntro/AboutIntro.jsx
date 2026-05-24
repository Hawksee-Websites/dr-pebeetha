import React from 'react';
import '../../../styles/AboutIntro.css';
import { Link } from 'react-router-dom';

function AboutIntro() {
    return (
        <div className='AboutIntro'>
            <div className="container">
                <div className="row">
                    <div className="left-col custom-fade-right" data-aos="custom-fade-right" data-aos-duration="1000">
                        <img src="img/about-intro.avif" alt="clinic image" />
                    </div>
                    <div className="right-col custom-fade-left" data-aos="custom-fade-left" data-aos-duration="1000">
                        <div className="content">
                            <h2>Meet Dr. Pebeetha: Unveiling the Simple Story Behind Exceptional ENT Care.</h2>
                            <p>
                                Welcome to Dr. Pebeetha's exceptional ENT care - where simplicity meets excellence. With warm, uncomplicated healthcare, Dr. Pebeetha ensures a personal connection to the essence of care. Experience optimal ENT health with us - your well-being is our primary focus.</p>
                            <Link to={'/about'}>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro