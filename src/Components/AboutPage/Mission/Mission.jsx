import React from 'react';
import '../../../styles/Mission.css';

function Mission() {
  return (
    <div className='Mission'>
      <div className="container">
        <div className="row">
          <div className="card" data-aos="fade" data-aos-duration="1000" data-aos-delay="100">
            <img src="img/icons8-mission-100.png" alt="our mission" />
            <h3>Mission</h3>
            <p>Our mission is to provide exceptional ear, nose, and throat care with a focus on personalized solutions. We are committed to delivering compassionate and effective medical services, ensuring the well-being and comfort of each patient. Our goal is to enhance your quality of life through expert diagnosis, treatment, and patient-centered care, setting a standard of excellence in ENT health.</p>

          </div>
          <div className="card" data-aos="fade" data-aos-duration="1000" data-aos-delay="100">
            <img src="img/icons8-vision-64.png" alt="our mission" />
            <h3>Vision</h3>
            <p>Our vision is to pioneer exceptional ENT healthcare, blending advanced expertise with compassionate service. We aspire to create a patient-centered experience that prioritizes preventive care, fostering a community of empowered and healthy individuals. Through innovation and commitment, we aim to redefine the landscape of ENT specialist and positively impact lives.</p>

          </div>
          <div className="card" data-aos="fade" data-aos-duration="1000" data-aos-delay="100">
            <img src="img/icons8-value-100.png" alt="our mission" />
            <h3>Our Values</h3>
            <p>Our core values guide our commitment to excellence. We prioritize integrity, compassion, and patient-centric care. These values drive our pursuit of innovation, ensuring each patient receives personalized, high-quality ENT healthcare. Our dedication to these principles forms the foundation of our mission to enhance well-being and redefine standards in ear, nose, and throat medicine.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Mission