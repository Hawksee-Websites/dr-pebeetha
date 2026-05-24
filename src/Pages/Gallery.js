import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/GeneralCmpnts/Navbar/Navbar'
import BannerSection from '../Components/GeneralCmpnts/BannerSection/BannerSection'
import BannerData from '../Components/Helpers/BannerData'
import GalleryList from '../Components/GalleryPage/GalleryList/GalleryList'
import axios from 'axios';
import { wordpressUrl } from '../Components/Helpers/wordpressUrl';
import EmbedList from '../Components/GalleryPage/EmbedList/EmbedList'
import Footer from '../Components/GeneralCmpnts/Footer/Footer'



function Gallery() {
    const { GalleryH2, GalleryImg } = BannerData;
    const [gallerydata, setgallery] = useState([]);

   


    useEffect(() => {

        const id = 9
        axios.get(`${wordpressUrl}wp-json/wp/v2/gallery/${id}`)
            .then(res => {
                setgallery(res.data)
                // console.log(res.data + 'gallery array')
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className='Gallery'>
            <Navbar />
            <BannerSection h2={GalleryH2} imgUrl={GalleryImg} />
            <GalleryList gallery={gallerydata} />
            <EmbedList embed={gallerydata} />
            <Footer />
        </div>
    )
}

export default Gallery