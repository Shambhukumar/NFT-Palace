import React from 'react';
import "./hero.scss";
const Hero = (props) => {
    const {size, img} = props.data
  return (
      <div className={`hero hero-${size}`}>
          <div className='hero-left'>
            <span className='hero-left-launch'>LANCHING SOON</span>

            <span className={`hero-left-text hero-left-text-${size} `}>
               An NFT like no other
            </span>

            <span className='hero-left-description'>
                Don't miss out on the release of our new NFT, Sign up below to receive updates when we go live.
            </span>
            <span className='hero-left-btn'>
             
                Sign Up
               
               
            </span>
          </div>

            <div className={`hero-right hero-right-${size}`}>
                <img src={img} alt="hero img"/>
                <span className='hero-right-ecp-1'></span>
                <span className='hero-right-ecp-2'></span>
            </div>
      </div>
  );
};

export default Hero;
