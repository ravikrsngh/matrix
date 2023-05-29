import React from 'react';
import './home.css';
import hero_slide1 from './assets/hero_slide1.png';
import hero_slide2 from './assets/hero_slide2.png';
import hero_slide3 from './assets/hero_slide3.png';
import hero_slide4 from './assets/hero_slide4.png';
import hero_slide5 from './assets/hero_slide5.png';
import hero_slide_empty from './assets/hero_slide_empty.png';

export default function HomePage() {
    return (
        <div className='hero_section'>
            <h2><span>ESCAPE</span> IF YOU <span>DARE</span></h2>
            <div className="hero_slideshow">
                <div className="hero_slide">
                    <img src={hero_slide1} alt="" />
                </div>
                <div className="hero_slide">
                    <img src={hero_slide2} alt="" />
                </div>
                <div className="hero_slide home_slide_active">
                    <img src={hero_slide3} alt="" />
                </div>
                <div className="hero_slide">
                    <img src={hero_slide4} alt="" />
                </div>
                <div className="hero_slide">
                    <img src={hero_slide5} alt="" />
                </div>
                <div className="hero_slideshow_overlay hero_slideshow">
                    <div className="hero_slide">
                        <img src={hero_slide_empty} alt="" />
                    </div>
                    <div className="hero_slide">
                        <img src={hero_slide_empty} alt="" />
                    </div>
                    <div className="hero_slide home_slide_active">
                        <a href="">Book Now</a>
                    </div>
                    <div className="hero_slide">
                        <img src={hero_slide_empty} alt="" />
                    </div>
                    <div className="hero_slide">
                        <img src={hero_slide_empty} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
