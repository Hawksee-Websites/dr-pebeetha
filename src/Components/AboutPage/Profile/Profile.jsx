import React from 'react';
import '../../../styles/Profile.css';

function Profile() {
    return (
        <div className='Profile'>
            <div className="container">
                <div className="row">
                    <div className="left-col custom-fade-right" data-aos="custom-fade-right" data-aos-duration="1000">
                        <h2>Getting to Know Dr. Pebeetha: A Specialist in Ear, Nose, and Throat Care</h2>
                        <p>
                            With a background in medicine from Government Medical College in Kannur and specialized training in Otolaryngology at Government Medical College, Kozhikode, I offer extensive expertise in ear, nose, and throat care.
                            <br></br>
                            <br></br>
                            With 16 years of experience, I prioritize compassionate and personalized medical care, tailored to each patient's unique needs. My approach is based on evidence-backed practices, ensuring top-notch diagnosis and treatment.
                            <br></br>
                            <br></br>
                            I value building strong patient-doctor relationships and empowering individuals to make informed health decisions. As your trusted healthcare provider, I am committed to your well-being and eager to support you on your path to optimal health.

                        </p>

                    </div>
                    <div className="right-col custom-fade-left" data-aos="custom-fade-left" data-aos-duration="1000">
                        <img src="img/pebeetha-ent.jpg" alt="doctor image" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile