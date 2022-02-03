import React from 'react';
import "./hero.scss";
import heroImg from "../../Assets/img/hero.png";
const Hero = () => {
  return (
      <div className='hero'>
          <div className='hero-left'>
            <span className='hero-left-launch'>LANCHING SOON</span>

            <span className='hero-left-text'>
                An NFT like no other
            </span>

            <span className='hero-left-description'>
                Don't miss out on the release of our new NFT, Sign up below to receive updates when we go live.
            </span>
            <span className='hero-left-btn'>
             
                Sign Up
               
               
            </span>
          </div>

            <div className='hero-right'>
                <img src={heroImg} alt="hero img"/>
                <span className='hero-right-ecp-1'></span>
                <span className='hero-right-ecp-2'></span>
            </div>
      </div>
  );
};

export default Hero;
