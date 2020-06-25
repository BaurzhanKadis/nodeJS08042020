import React from "react";

import "./ParamsTypes.css";

const ParamsTypes = ({ paramsTypes, onParamChange, param }) => {
  return (
    <div className="ParamsTypes-container">
      <ul>
        {paramsTypes.map((item) => {
          return (
            <li 
              key={item.id} 
              className={`ParamsTypes-block ${item.type === param ? "ParamsTypes-block-active" : ""}`}
              onClick={()=>onParamChange(item.type)}>
                <img src={item.img} alt="goll" />
                <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
      {/* <div className="ParamsTypes-block">
        <img src="img/goll.png" alt="goll"/>
        <span>Голы</span>
      </div>
      <div className="ParamsTypes-block">
        <img src="img/drill.png" alt="drill"/>
        <span>Фэилы</span> 
      </div>
      <div className="ParamsTypes-block">
        <img src="img/combo.png" alt="combo"/>
        <span>Комбинации</span>
      </div> */}
    </div>
  );
};

export default ParamsTypes;
