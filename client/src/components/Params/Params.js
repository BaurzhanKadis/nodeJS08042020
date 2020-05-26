import React from 'react';

import './Params.css'

const Params = ({ smallUsers, bigUsers }) => {
  return (
    <div className="stock_market-container">
      <div 
        className="params_block"
        onClick={smallUsers}>
        <span>Игроки до 12 лет</span>
      </div>
      <div 
        className="params_block"
        onClick={bigUsers}>
        <span>Игроки от 12 лет</span>
      </div>
      <div className="params_block">
        <span>Вакансии</span>
      </div>
    </div>
  );
};

export default Params;