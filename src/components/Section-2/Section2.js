import React from "react";
import "./section2.scss";
import currency1 from "../../Assets/img/currency-1.png";
import currency2 from "../../Assets/img/currency-2.png";
const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-card1">
        <img src={currency1} alt="img 1" />
        <span>An NFT like no other</span>
        <p>
          Don’t miss out on the release of our new NFT. Sign up below to receive
          updates when we go live on 18/9.
        </p>
        <p>
          Don’t miss out on the release of our new NFT. Sign up below to receive
          updates when we go live on 18/9. Don’t miss out on the release of our
          new NFT.
        </p>
      </div>
      <div className="section2-card2">
        <img src={currency2} alt="img 1" />
        <span>An NFT like no other</span>
        <p>
          Don’t miss out on the release of our new NFT. Sign up below to receive
          updates when we go live on 18/9.
        </p>
        <p>
          Don’t miss out on the release of our new NFT. Sign up below to receive
          updates when we go live on 18/9. Don’t miss out on the release of our
          new NFT.
        </p>
      </div>
     
    </div>
  );
};

export default Section2;
