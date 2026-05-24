import React, { useEffect } from 'react'
import '../../../styles/Testimonials.css'
import Flickity from 'flickity';
import 'flickity/css/flickity.css';


function Testimonials() {
    useEffect(() => {
        const flickityCarousel = new Flickity('.main-carousel', {
            initialIndex: 0,
            cellAlign: 'left',
            contain: true,
            draggable: true,
            wrapAround: true,
            freeScroll: true,
            prevNextButtons: true,
            autoPlay: 5000,
            selectedAttraction: 0.01,
            friction: 0.20,
            pageDots: true,
            imagesLoaded: true,
            pauseAutoPlayOnHover: false,

        });

        return () => {
            flickityCarousel.destroy();
        };
    }, []);
    return (
        <div className='Testimonials'>
            <div className="container">
                <h2 data-aos="fade" data-aos-duration="1000">Testimonials</h2>
                <div className="main-carousel">

                    <div className="carousel-cell">
                        <div className="card">
                            <span className='quote'><i class="fa-solid fa-quote-left"></i></span>
                            <div className="content">
                                <p>Today I met Dr.Pebeetha Fathima at the Co-Operative Hospital kozhikode, regarding my ENT issue. Very good doctor and kind at heart. She is caring and soft spoken. She is a dedicated doctor. The way she talks is half of the cure for your problem. We can freely interact with the doctor. The trust and survival of a hospital rests on the services of such doctors. I'm grateful to you doctor.</p>
                            </div>
                            <div className="five-star-icon">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div className="img-container">
                                <img src="img/testimonials/vm-vinu.png" alt="avatar" />
                                <img src="img/google.png" className='google-icon' alt="google icon" />
                            </div>

                            <h3>V M Vinu</h3>

                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <span className='quote'><i class="fa-solid fa-quote-left"></i></span>
                            <div className="content">
                                <p>One of the best ent doctor in Calicut.I consulted with her for my kid and she is very polite and informative .gave the right consultation . Many thanks to her</p>
                            </div>
                            <div className="five-star-icon">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>

                            <div className="img-container">
                                <img src="img/testimonials/sruthi-a.png" alt="avatar" />

                                <img src="img/google.png" className='google-icon' alt="google icon" />
                            </div>
                            <h3>Sruthi A</h3>

                        </div>
                    </div>
                    
                    <div className="carousel-cell">
                        <div className="card">
                            <span className='quote'><i class="fa-solid fa-quote-left"></i></span>
                            <div className="content">
                                <p>After seeing multiple doctors I found Dr Pebeetha Fathima was able to get to the root of my problems,I had a Allergic issue for the last few years,And now Alhamdulillha am so great full to say that I am totally healed from my problems. she showed me excellent quality of care,great follow up. She is got a great beside manner and really cares. Thank you Dr.</p>
                            </div>
                            <div className="five-star-icon">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div className="img-container">
                                <img src="img/avatar.jpeg" alt="avatar" />


                            </div>
                            <h3>Ajmal Abubacker</h3>

                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <span className='quote'><i class="fa-solid fa-quote-left"></i></span>
                            <div className="content">
                                <p>I am incredibly grateful to Dr. Pebeetha Fathima for her exceptional care and expertise in treating my parosmia, which had plagued me for three long years following the pandemic. After countless attempts to find relief, I finally found hope in Dr. Pebeetha. Her comprehensive approach, including medication, smell training, and unwavering support, ultimately led to my recovery. Her kind words of assurance provided comfort throughout the journey. Thanks to her dedication and skill, I am now able to enjoy the sense of smell once again. Dr. Pebeetha's professionalism and compassion truly made all the difference in my healing process.</p>
                            </div>
                            <div className="five-star-icon">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div className="img-container">
                                <img src="img/avatar.jpeg" alt="avatar" />


                            </div>
                            <h3>Sham Mohammed, Director, Storycat Creative Pvt Ltd</h3>

                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <span className='quote'><i class="fa-solid fa-quote-left"></i></span>
                            <div className="content">
                                <p>Here, I am going to share my experience with Dr. Pebeetha, an ENT specialist at Co-operative Hospital Eranhippalam. I happened to see Dr. Pebeetha when my son's nose was injured a couple of hours before I was scheduled to leave Saudi Arabia. I happened to see Dr. Pebeetha at Eranhippalam Hospital, and she provided medicines and performed all the necessary procedures without any delay. She supported us in that critical moment without any hesitation. After that, I was able to leave without missing my flight that day, and my son's health was okay. The attitude of a doctor towards a patient is a very important thing; Dr. Pebeetha's approach was very good. Whenever I asked through the phone in any emergency situation, Dr. Pebeetha used to reply and provide prescriptions. She is a great doctor. 👩‍⚕️</p>
                            </div>
                            <div className="five-star-icon">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div className="img-container">
                                <img src="img/avatar.jpeg" alt="avatar" />


                            </div>
                            <h3>Saleekha Roshan</h3>

                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <span className='quote'><i class="fa-solid fa-quote-left"></i></span>
                            <div className="content">
                                <p>I have been going to Dr. Pebeetha for the last 10-12 years. She always informs me about the treatment options and considers our long-term health. She is my go-to doctor for most ailments. Dr. Pebeetha is caring and compassionate. I am thankful for all the care I have received and for future ones as well. 😊</p>
                            </div>
                            <div className="five-star-icon">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div className="img-container">
                                <img src="img/avatar.jpeg" alt="avatar" />


                            </div>
                            <h3>Tania K P</h3>

                        </div>
                    </div>
                    <div className="carousel-cell">
                        <div className="card">
                            <span className='quote'><i class="fa-solid fa-quote-left"></i></span>
                            <div className="content">
                                <p>Dr. Pebeetha Fathima is an amazing person and very professional in her work. My family and I have been experiencing certain allergic conditions for the last few years, and now they are totally cured thanks to your great care and follow-up. Dr. Pebeetha Fathima, you will stay in our hearts forever. Thank you, Doctor.</p>
                            </div>
                            <div className="five-star-icon">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div className="img-container">
                                <img src="img/avatar.jpeg" alt="avatar" />


                            </div>
                            <h3>Aishwarya</h3>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonials