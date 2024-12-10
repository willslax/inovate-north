import React from 'react';
import '../../css/style.css';
import HeroBanner from '../../assets/hero-banner1.png';
import Hack4Progress from '../../assets/hack4progress.svg';
import { Button } from '@mui/material';
import Sponsors from '../../assets/Patner.jpg';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="hero-content">
        <div className="hero-content-container">
            <div className="hack4progress">
                <img src={Hack4Progress} alt="hack4progress" />
            </div>
            <div className="hero-content-text">
                <p>Join us at Innovate North to build tech-driven solutions that address Northern Nigeria’s most pressing challenges.</p>
                <p className='date-location'>9th -12th December 2024 <br />Kano, Nigeria</p>
            </div>
            <NavLink to='/register'><Button variant='contained' className='register' size='small'>Register Now  to Participate</Button></NavLink>
            <img src={Sponsors} alt="sponsors" className='sponsors' />
        </div>
      </div>
      <div className="hero-banner">
        <img src={HeroBanner} alt="banner" />
      </div>
    </section>
  )
}

export default Hero;
