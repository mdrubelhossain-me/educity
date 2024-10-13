import React, { Component } from 'react';
import './Gallery.css'
import './GalleryResponsice.css'
import g_1 from '../../assets/images/gallery-1.png'
import g_2 from '../../assets/images/gallery-2.png'
import g_3 from '../../assets/images/gallery-3.png'
import g_4 from '../../assets/images/gallery-4.png'

class Gallery extends Component {
    render() {
        return (
            <div className='container gallery-section' id='campus'>
                <div className="gallery">
                    <img src={g_1} alt="" />
                    <img src={g_2} alt="" />
                    <img src={g_3} alt="" />
                    <img src={g_4} alt="" />
                </div>
                <button className='btn'>See More &rarr;</button>
            </div>
        );
    }
}

export default Gallery;