import React from 'react'
import '../../../styles/BannerSection.css'

function BannerSection(props) {
    const { h2, imgUrl } = props;
    const backgroundImageStyle = { backgroundImage: `url('${imgUrl}')` };
    return (
        <div className='BannerSection'>
            <div className="img-container" style={backgroundImageStyle}>

            </div>
            <div className="overlay"></div>
            <div className="text">
                <h2>{h2}</h2>
            </div>
        </div>
    )
}

export default BannerSection