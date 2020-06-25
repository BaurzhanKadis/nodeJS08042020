import React from "react";

import "./ParamsBestMoment.css";

const ParamsBestMoment = ({ male, filter, onFilterChange }) => {
  return (
    <ul className="ParamsBestMoment-container">
      {male.map((item) => {
        return (
          <li
            key={item.id}
            className={`ParamsBestMoment-block ${
              filter === item.male ? "ParamsBestMoment-block_active" : ""
            }`}
            onClick={() => onFilterChange(item.male)}
          >
            <span>{item.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ParamsBestMoment;
