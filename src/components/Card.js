import React from "react";
import "./card.scss";
const Card = (props) => {
  const { img, series, name, price, currency, id, days, icon,backcolor,fontcolor } = props.data;
  return (
    <div className="card">
      <img className="card-img" src={img} alt="card-img" />
      <div className="card-container" style={{"backgroundColor": backcolor}}>
        <div className="card-container-top">
          {" "}
          <span className="card-container-top-series">{series}</span>
          <span>TOP BID</span>
        </div>
        <div className="card-container-mid" style={{"color": fontcolor}}>
          <span>{name}</span>
          <span className="card-container-mid-price">
            <img src={icon} alt="icon currency" />
            {price} {currency}
          </span>
        </div>
        <div className="card-container-bot">
          <span>{id}</span> <span>{days}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
