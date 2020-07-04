import React from 'react';

import './SettingParams.css';

const SettingParams = ({ settingHandler }) => {
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