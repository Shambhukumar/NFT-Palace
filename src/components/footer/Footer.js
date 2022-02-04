import React from "react";
import "./footer.scss";
import logo from "../../Assets/img/logo.svg";
import facebook from "../../Assets/img/socialIcon/facebook.svg";
import twiter from "../../Assets/img/socialIcon/twitter.svg";
import instagram from "../../Assets/img/socialIcon/instagram.svg";
import tiktok from "../../Assets/img/socialIcon/tiktok.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <span className="footer-top-left-logo">
            {" "}
            <img src={logo} alt="footer img" /> NFT-Palace
          </span>
          <span className="footer-top-left-text">Exclusive NFT Collection</span>
          <div className="footer-top-left-icons">
            <img src={facebook} alt="facebook" />
            <img src={twiter} alt="twiter" />
            <img src={instagram} alt="instagram" />
            <img src={tiktok} alt="tiktok" />
          </div>
        </div>
        <div className="footer-top-right">
           <div className="footer-top-right-about">
               <span>ABOUT</span>
               <ul>
                   <li>About</li>
                   <li>Terms</li>
                   <li>Legal</li>
               </ul>
           </div>
           <div className="footer-top-right-nft">
               <span>NFT</span>
               <ul>
                   <li>OpenSea</li>
                   <li>Maker</li>
                   <li>Learn</li>
               </ul>
           </div>
           <div className="footer-top-right-contact">
               <span>CONTACT</span>
               <ul>
                   <li>Press</li>
                   <li>Support</li>
               </ul>
           </div>
           <div className="footer-top-right-social">
               <span>SOCIAL</span>
               <ul>
                   <li>Twitter</li>
                   <li>Instagram</li>
               </ul>
           </div>

        </div>
      </div>
      <div className="footer-bottom">
            <span>&copy; Copyright 2022 NFT-Palace </span>
            <span>Launching Augast 2022 </span>
      </div>
    </div>
  );
};

export default Footer;
