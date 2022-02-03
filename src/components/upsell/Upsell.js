import React from "react";
import "./upsell.scss";
import upsellLogo from "../../Assets/img/upsell-icon.svg";
import img1 from "../../Assets/img/upsell/upsell-1.png";
import img2 from "../../Assets/img/upsell/upsell-2.png";
import currency from "../../Assets/img/currency-1.png";
import Card from "../Card";

const data = {
  img: img1,
  series: "GLOOP SERIES",
  name: "Purple Man",
  price: 2.99,
  currency: "ETH",
  id: "#12983",
  days: "1 day left",
  icon: currency,
  backcolor: "#ffff",
  fontcolor: "#111111"

};

const data2 = {
    img: img2,
    series: "GLOOP SERIES",
    name: "Brown Woman",
    price: 2.99,
    currency: "ETH",
    id: "#1094",
    days: "2 day left",
    icon: currency,
    backcolor: "#111111",
    fontcolor: "White"
  };
const Upsell = () => {
  return (
    <div className="upsell">
      <div className="upsell-container">
        <img src={upsellLogo} alt="upsell logo" />
        <span className="upsell-container-text">Free NFT for early birds</span>
        <span className="upsell-container-dis">
          Sign up today and you'll get a free NFT when we launch
        </span>
      </div>
      <div className="upsell-cards">
         <div className="upsell-cards-1"><Card data={data} /></div>
         <div className="upsell-cards-2"><Card data={data2} /></div>
      </div>
    </div>
  );
};

export default Upsell;
