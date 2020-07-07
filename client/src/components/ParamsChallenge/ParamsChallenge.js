import React from "react";

import "./ParamsChallenge.css";

const ParamsChallenge = ({
  itemTeam,
  onFilterChange,
  filter,
  prom,
  setting,
  filterParam,
}) => {
  return (
    <React.Fragment>
      <ul className="ParamsChallenge-container">
        {itemTeam.map((item) => {
          return (
            <li
              key={item.id}
              className={`ParamsChallenge-block ${
                filter === item.filterItem ? "ParamsChallenge-block-active" : ""
              }`}
              onClick={() => onFilterChange(item.filterItem)}
            >
              <img src={item.url} alt={item.name} />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
      <div className="SettingChallenge-container">
        {filterParam.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => prom(item.id, item.id)}
              className={`SettingChallenge-block ${
                item.id === setting ? "SettingChallenge-block-active" : ""
              }`}
            >
              <span>{item.name}</span>
            </div>
          );
        })}
        <div className="SettingChallenge-add">
          <span>Принять участие</span>
          <img src="img/addUser.png" alt="addUser" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParamsChallenge;
