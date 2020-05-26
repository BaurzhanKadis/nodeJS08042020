import React from 'react';

import './SettingParams.css';
const settingHandler = () => {
  console.log("settingHandler")
}
const SettingParams = () => {
  return (
    <div className="setting_params-container">
      <span className="setting_params-link" onClick={settingHandler}>
        <i className="fas fa-indent"></i>
        <span>Настойка Параметров</span>
      </span>
    </div>
  );
};

export default SettingParams;