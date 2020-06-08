import React from 'react';

import './ParamsBox.css';

const ParamsBox = () => {
  return (
    <div className="ParamsBox-container">
      <img className="paramBox_img" src="img/setting.png" alt="setting"/>
      <form className="paramBox_form" action="">
        <input className="paramBox-input" type="text" />
        <button type="submit">
          <img src="img/search.png" alt="search"/>
        </button>
      </form>
      <div className="add_box"></div>
      <div className="title_paramBox">
        Параметры:
        <span> Москва</span>
        <span className="close-title_paramBox"></span>
      </div>
      <div className="how-work">
        Как это работает?*
      </div>
    </div>
  );
};

export default ParamsBox;