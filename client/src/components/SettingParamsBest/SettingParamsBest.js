import React from 'react';

import './SettingParamsBest.css';

const SettingParamsBest = ({ visible, onVisibleSetting, filterParam, setting, prom }) => {
  return (
    <div className="SettingParamsBest-container">
      {filterParam.map((item)=>{
        return <div key={item.id} 
                    // onClick={()=>onToggleSetting(item.id)} 
                    onClick={()=>prom(item.id, item.name, item.id)} 
                    className={`SettingParamsBest-block ${
                      item.id === setting ? "SettingParamsBest-block-active" : ""
                    }`}>
                <span>{item.name}</span>
              </div>
      })}

      <div onClick={onVisibleSetting} className={`top-bottum ${visible?"top-bottum-active":""}`}>
        <span></span>
      </div>
    </div>
  );
};

export default SettingParamsBest;