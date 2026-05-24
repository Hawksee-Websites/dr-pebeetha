import React, { useEffect, useState } from 'react';
import '../../../styles/EmbedList.css';

function EmbedList({ embed }) {
    const [embedData, setEmbedData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const extractYouTubeLinks = (content) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');
            const iframeElements = doc.querySelectorAll('iframe');
          

            const youtubeLinks = Array.from(iframeElements)
                .map((iframe) => {
                    const src = iframe.getAttribute('src');
                    if (src && src.includes('youtube.com')) {
                        return src;
                    }
                    return null;
                })
                .filter((link) => link !== null);

            return youtubeLinks;
        };

        if (embed && embed.content) {
            const youtubeLinks = extractYouTubeLinks(embed.content.rendered);
            setEmbedData(youtubeLinks);
            setLoading(false);
        }
    }, [embed]);


    return (
        <div className='EmbedList'>
            <div className="container">
                {embedData.length > 0 && <h2>Youtube Videos</h2>}
                <div className="row">
                    {embedData.map((link, index) => (
                        <div key={index} className="video-container">
                            <iframe
                                width="360"
                                height="215"
                                src={link}
                                title={`Embedded YouTube Video ${index}`}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EmbedList;
