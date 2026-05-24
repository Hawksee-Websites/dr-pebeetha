import React, { useEffect } from 'react';
import '../../../styles/PreLoader.css';

function PreLoader({ loading }) {
  const html = document.querySelector('html');
  html.style.overflowY = loading ? 'hidden' : 'auto';


  return (
    <div className={`PreLoader ${loading ? 'visible' : 'hidden'}`} id="preloader">
      <div className="middle">
        <span class="loader"></span>

      </div>
    </div>
  );
}

export default PreLoader;
