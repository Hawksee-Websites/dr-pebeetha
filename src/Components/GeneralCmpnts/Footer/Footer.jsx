import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MenuContext from '../../../Context/menuProvider';
import '../../../styles/Footer.css'
function Footer() {
  const { setImage, image } = useContext(MenuContext)

  return (
    <div className='Footer'>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="logo">
              <img src={image} alt="WhiteField logo" />

            </div>
            {/* <p className='quote'>Locking Excellence, Opening Peace of Mind!</p> */}
            <div className="social-media-icons">
              <a href="https://www.facebook.com/drpebeethafathimaclt/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-facebook"></i>

              </a>
              <a href="https://www.instagram.com/dr.pebeetha_fathima/" target="_blank"
                rel="noopener noreferrer">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC6zUB_Zvd9jHxOSr6xQdy4A" target="_blank"
                rel="noopener noreferrer">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://maps.app.goo.gl/UQSW26dLSQvosg7t5" target="_blank"
                rel="noopener noreferrer">
                <i class="fa-brands fa-google"></i>
              </a>
            </div>

          </div>
          <div className="col">

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>

            </li>
            <li>
              <Link to="/services">services</Link>
            </li>





          </div>
          <div className="col">


            <li>
              <Link to="/gallery">gallery</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </div>
          <div className="col right">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="content">
              <p>
                District Co-Operative Hospital Ltd,
                <br />
                Mini Bypass Rd, Eranhipaalam,
                <br />

                Kozhikode, Kerala
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="copyright">
        <p>© Copyright - Dr.Pebeetha</p>
      </div>
    </div>
  )
}

export default Footer