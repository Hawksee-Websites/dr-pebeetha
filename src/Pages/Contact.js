import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/GeneralCmpnts/Navbar/Navbar'
import BannerSection from '../Components/GeneralCmpnts/BannerSection/BannerSection'
import BannerData from '../Components/Helpers/BannerData'
import ContactForm from '../Components/ContactPage/ContactForm/ContactForm'
import Footer from '../Components/GeneralCmpnts/Footer/Footer'

function Contact() {
    const { ContactH2, ContactImg } = BannerData;
    
    return (
        <div className='Contact'>
            <Navbar />
            <BannerSection h2={ContactH2} imgUrl={ContactImg} />
            <ContactForm />
            <Footer />

        </div>
    )
}

export default Contact