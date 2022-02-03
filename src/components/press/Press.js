import React from 'react';
import "./press.scss";
import BoomerangImg from "../../Assets/img/press/Boomerang.svg";
import BlipImg from "../../Assets/img/press/Blimp.svg";
import qrcoImg from "../../Assets/img/press/qeco.svg";
import OpenDoorImg from "../../Assets/img/press/OpenDoor.svg";
import DropletImg from "../../Assets/img/press/Droplet.svg";
const Press = () => {
  return (
  <div className='press'>
      <span className='press-item'><img src={BoomerangImg} alt="boomrang logo"/>Boomerang</span>
      <span className='press-item'><img src={BlipImg} alt="BlipImg logo"/>Blimp</span>
      <span className='press-item'><img src={qrcoImg} alt="qrco logo"/>qrco</span>
      <span className='press-item'><img src={OpenDoorImg} alt="open Door logo"/>OpenDoor</span>
      <span className='press-item'><img src={DropletImg} alt="Droplet logo"/>Droplet</span>

  </div>);
};

export default Press;
