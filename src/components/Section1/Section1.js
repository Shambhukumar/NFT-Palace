import React from "react";
import "./section1.scss";
import Img1 from "../../Assets/img/section-1.png";
import img2 from "../../Assets/img/upsell/upsell-2.png";
import arrow from "../../Assets/img/arrow.svg";
import currency from "../../Assets/img/currency-1.png";
import Card from "../Card";
const Section1 = () => {
  const carddata =  {
    img: img2,
    series: "GLOOP SERIES",
    name: "Brown",
    price: 2.99,
    currency: "ETH",
    id: "#12983",
    days: "1 day left",
    icon: currency,
    backcolor: "#111111",
    fontcolor: "#ffff" 
  
  }
  return (
    <div className="section1">
      <dev className="section1-1">
      <div className="section1-1-text">
        <span className="section1-1-text-head">Initial Release 4/11</span>
        <div>
        <p className="section1-1-text-peragraph-1">
          We have released four limited edition NFTs early which can be bid on
          via <span>OpenSea</span>.
        </p>
        <p className="section1-1-text-peragraph-2">
          These will be the only four of these NFTs we ever make, so be sure not
          to miss out!
        </p>
        <p className="section1-1-text-peragraph-3">50% of proceeds go to charity.</p>
        </div>
        <span className="section1-1-text-btn">Check them out <img src={arrow} alt="arrow"/></span>
      </div>
      <div className="section1-1-image">
          <img src={Img1} alt="red-man-img"/>
          <span></span>
            <div className="section1-1-image-text">
            <span className="section1-1-image-text-top">GLOOP SERIES</span>
            <span  className="section1-1-image-text-mid">Red Man</span>
            <span  className="section1-1-image-text-bot">#12983</span>
          </div>
          <span className="section1-1-image-color"></span>
      </div>
      </dev>
      <dev className="section1-2">
      <div className="section1-2-text">
        <span className="section1-2-text-head">Initial Release 4/11</span>
        <div>
        <p className="section1-2-text-peragraph-1">
          We have released four limited edition NFTs early which can be bid on
          via <span>OpenSea</span>.
        </p>
        <p className="section1-2-text-peragraph-2">
          These will be the only four of these NFTs we ever make, so be sure not
          to miss out!
        </p>
        <p className="section1-2-text-peragraph-3">50% of proceeds go to charity.</p>
        </div>
        <span className="section1-2-text-btn">Check them out <img src={arrow} alt="arrow"/></span>
      </div>
      <div className="section1-2-image">
         <span className="section1-2-image-card"><Card  data={carddata}/></span>
          {/* <img src={Img1} alt="red-man-img"/> */}
          {/* <span></span> */}
          <span className="section1-2-image-color"></span>
      </div>
      </dev>
    </div>
  );
};

export default Section1;
