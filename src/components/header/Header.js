import React from 'react';
import "./Header.scss";
import logo from "../../Assets/img/logo.svg";
const Header = () => {
  return (
      <div className='header'>
            <div className='header-icon'>
                <img src={logo} alt="logos-vg"/> <span className='header-icon-text'>NFT-Palace</span>
            </div>
          <ul className='header-links'>
                <li className='header-links-item'>Features</li>
                <li className='header-links-item'>About</li>
                <li className='header-links-item'>Launch</li>
                <li className='header-links-item'>Sign Up</li>
          </ul>
      </div>
  );
};

export default Header;
