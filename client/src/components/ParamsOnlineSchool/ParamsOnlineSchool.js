import React, {useState} from "react";
import { Link as LinkLI} from "react-scroll";

import "./ParamsOnlineSchool.css";

const ParamsOnlineSchool = ({ itemTeam, lesson, filter, onFilterChange }) => {
  const [ activeNavi, setActiveNavi ] = useState(true);
  const widthItemsMidle = 100//средняя ширина блока "lesson_item" 
  const naviHandler = () => {
    setActiveNavi(!activeNavi) 
  }
  return (
    <React.Fragment>
      <ul className="ParamsOnlineSchool-container">
        {itemTeam.map((item) => {
          return (
            <li
              key={item.id}
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
      <div className="lessonNavi" onClick={naviHandler}>
        <img src="img/arrow.png" alt="arrow"/>
        <span>Навигация по урокам</span>
      </div>
      <div className={`list_itemsLessons ${activeNavi?"list_itemsLessons-active":""}`}>
        <ul className="lesson_items" style={{ width: `${widthItemsMidle*lesson.length}px` }}>
          {lesson.map((item) => {
            return (
              <li className="lesson_item"  key={item.id}>
                <LinkLI
                  // href={`#${item.id}`}
                  to={`sec${item.id}`}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Урок № {item.id}
                </LinkLI>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ParamsOnlineSchool;
