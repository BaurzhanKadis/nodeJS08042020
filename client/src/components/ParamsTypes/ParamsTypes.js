import React from 'react';

import './ParamsTypes.css';

const ParamsTypes = () => {
  return (
    <div className="ParamsTypes-container">
      <div className="ParamsTypes-block">
        <img src="img/goll.png" alt="goll"/>
        <span>Голы</span>
      </div>
      <div className="ParamsTypes-block">
        <img src="img/drill.png" alt="drill"/>
        <span>Дриблинг</span>
      </div>
      <div className="ParamsTypes-block">
        <img src="img/combo.png" alt="combo"/>
        <span>Комбинации</span>
      </div>
    </div>
  );
};

export default ParamsTypes;