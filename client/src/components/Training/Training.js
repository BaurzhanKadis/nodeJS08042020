import React from 'react';

import './Training.css';

const Training = () => {
  return (
    <div className="Training-container">
      <ul className="Training-ul">
        <li>
          <span className="Training_month">Апрель</span>
          <div className="Training_dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
        <li>
          <span className="Training_month">Май</span>
          <div className="Training_dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
        <li>
          <span className="Training_month">Июнь</span>
          <div className="Training_dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
        <li>
          <span className="Training_month">Июль</span>
          <div className="Training_dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
      </ul>
      <div className="Training-add_training">
        <span>Добавить событие</span>
      </div>
    </div>
  );
};

export default Training;