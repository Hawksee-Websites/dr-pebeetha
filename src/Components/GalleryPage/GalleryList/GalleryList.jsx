import React, { useEffect, useRef, useState } from 'react';

import '../../../styles/GalleryList.css'
import LightGallery from 'lightgallery/react';
import LGFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';
import 'lightgallery/css/lg-autoplay.css';
import lozad from 'lozad';


function GalleryList({ gallery }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const extractImageLinksFromContent = (content) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      const imageElements = doc.querySelectorAll('img, alt');

      const imageLinks = Array.from(imageElements).map((img) => ({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt'),
      }));

      return imageLinks.filter((image) => image.src !== null);
    };

    if (gallery && gallery.acf && gallery.acf.gallery) {
      const imageLinks = extractImageLinksFromContent(gallery.acf.gallery);
      setImages(imageLinks);
      setLoading(false);
    }
  }, [gallery]);


  useEffect(() => {
    const observer = lozad('.lozad', {
      loaded: function (el) {

        el.classList.add('lazy-loaded');
        el.addEventListener('load', () => {
          el.classList.remove('skeleton-loader');
        });
      },
      rootMargin: '-20px 0px',
    });
    observer.observe();

    return () => {

    };
  }, []);
  if (loading) {
    return (
      <div className="spinning_loading">
        <span class="loader"></span>
      </div>
    );
  }

  return (
    <div className='GalleryList'>
      {gallery && (
        <div className="container">
          <h2>Photos</h2>
          {images.length === 0 ? (
            <p>No photos found.</p>
          ) : gallery.acf && gallery.acf.gallery && (
            <LightGallery
              plugins={[LGFullscreen, lgShare, lgZoom, lgAutoplay]}
              videojs={true}
              videojsOptions={{
                muted: true,
              }}
              speed={500}
            >
              {images.map((image, index) => (
                <a className="img-container" href={image.src} key={index}>
                  <img alt={image.alt || `img-${index}`} src={image.src} className='lozad skeleton-loader' />
                </a>
              ))}
            </LightGallery>
          )}
        </div>
      )}
    </div>
  );
}

export default GalleryList;