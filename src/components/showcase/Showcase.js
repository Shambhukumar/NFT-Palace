import React from 'react';
import Card from '../Card';
import {data} from "./showcasedata";
import "./showcase.scss";
const Showcase = () => {
  return (
  <div className='showcase'>
      <div className='showcase-text'>
          <span className='showcase-text-1'>LE Super Rare Auction</span>
          <span className='showcase-text-2'>We have released four limited edition NFTs early which can be bid on via <span>Open Sea</span></span>
      </div>
      <div className='showcase-card'>
            {data.map((e,el)=>{
                return <Card data={e}/>
            })}
      </div>

  </div>);
};

export default Showcase;
