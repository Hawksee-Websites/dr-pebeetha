import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import ScrollToTop from './Components/GeneralCmpnts/ScrollToTop/ScrollToTop';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import PreLoader from './Components/GeneralCmpnts/PreLoader/PreLoader'
import Whatsapp from './Components/GeneralCmpnts/Whatsapp_btn/Whatsapp';
import AppointmentPage from './Pages/AppointmentPage';
import OnlineAppointment from './Pages/OnlineAppointment';
import OfflineAppointment from './Pages/OfflineAppointment';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Introduce a minimum delay of 2 seconds before checking document.readyState
      await new Promise(resolve => setTimeout(resolve, 2000));
    
      if (document.readyState !== 'loading') {
        setLoading(false);
      }
    };

    fetchData();
  })

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Whatsapp/>
        <PreLoader loading={loading} />


        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/appointment' element={<AppointmentPage />} />
          <Route path='/appointment/online' element={<OnlineAppointment />} />
          <Route path='/appointment/offline' element={<OfflineAppointment />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
