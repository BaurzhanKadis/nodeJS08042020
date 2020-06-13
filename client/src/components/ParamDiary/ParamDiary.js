import React from 'react';

import './ParamDiary.css';

const ParamDiary = ({ diaryItems, filter, onFilterChange }) => {
  return (
    <ul className="ParamDiary-container">
      {
        diaryItems.map((item,id)=>{
          return (
            <li 
              key={id} 
              className={`ParamDiary-block ${filter === item.itemEl ? "ParamDiary-block_active" : ""}`}
              onClick={()=>onFilterChange(item.itemEl)}>
              <span>{item.name}</span>
            </li>
          )
        })
      }
    </ul>
  );
};

export default ParamDiary;