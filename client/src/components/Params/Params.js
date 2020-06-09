import React from 'react';

import './Params.css'

const Params = ({ total, smallUsers, bigUsers, male, toggleMale }) => {
  return (
    <div className="stock_market-container">
      <div 
        className={`params_block ${ !total ? "params_block-active" : ""}`}
        onClick={smallUsers}>
        <span>Игроки до 12 лет</span>
      </div>
      <div 
        className={`params_block ${ total ? "params_block-active" : ""}`}
        onClick={bigUsers}>
        <span>Игроки от 12 лет</span>
      </div>
      <div className="params_block-male">
        <span className={!male ? "params_block-w" : "not-w"}>Ж</span>
        <span 
          className="params_block-check"
          onClick={toggleMale}>
          <span className={`params_block-toggle ${male ? "activeToggle" : ""}`}></span>
        </span>
        <span className={!male ? "params_block-m" : "yes-m"}>M</span>
      </div>
    </div>
  );
};

export default Params;