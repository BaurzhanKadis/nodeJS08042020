import React, {useState} from "react";
import { Link } from 'react-scroll';

import "./ParamsOnlineSchool.css";

const ParamsOnlineSchool = ({ itemTeam, lesson, filter, onFilterChange, filterParam, prom, setting, visible, onVisibleSetting }) => {
  const [ activeNavi, setActiveNavi ] = useState(true);
  const widthItemsMidle = 100//средняя ширина блока "lesson_item" 
  const naviHandler = () => {
    setActiveNavi(!activeNavi) 
  }
  const func = () => {
    onVisibleSetting()
    setActiveNavi(true) 
  }
  return (// href={`#sec${id+1}`}
    <React.Fragment>
      <ul className={`ParamsOnlineSchool-container ${visible?"ParamsOnlineSchool-container-active":""}`}>
        {itemTeam.map((item, id) => {
          return (
            <li
              key={id}
              className={`ParamsOnlineSchool-block ${
                filter === item.filterItem
                  ? "ParamsOnlineSchool-block-active"
                  : ""
              }`}
              onClick={() => onFilterChange(item.filterItem)}
            >
              <img src={item.url} alt={item.name} />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
      <div className={`lessonNavi ${visible?"lessonNavi-active":""}`} onClick={naviHandler}>
        <img src="img/arrow.png" alt="arrow"/>
        <span>Навигация по урокам</span>
      </div>
      <div className={`list_itemsLessons ${activeNavi?"list_itemsLessons-active":""}`}>
        <ul className="lesson_items" style={{ width: `${widthItemsMidle*lesson.length}px` }}>
          {lesson.map((item, id) => {
            return (
              <li className="lesson_item"  key={id}>
                <Link to={`sec${id+1}`} spy={true} smooth={true} offset={-70} duration={500}> 
                  Выпуск № {id+1}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="SettingChallenge-container">
      {filterParam.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => prom(item.id, item.id)}
              className={`ParamsOnlineSchool-duble SettingChallenge-block ${
                item.id === setting ? "SettingChallenge-block-active" : ""
              }`}
            >
              <span>{item.name}</span>
            </div>
          );
        })}
        <div onClick={func} className={`top-bottum ${visible?"top-bottum-active":""}`}>
          <span></span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParamsOnlineSchool;
