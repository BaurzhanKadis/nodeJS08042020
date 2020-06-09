import React from "react";

import "./BoxStructure.css";

const BoxStructure = ({ pole }) => {
  return (
    <div className="BoxStructure-container">
      <h1 className="BoxStructure_title">Список</h1>
      <ul className="BoxStructure_matrix">
        {pole.map((item, id) => {
          return (
            <li key={id}>
              <div className="BoxStructure_address">
                {id} г. {item.city} {item.address}
              </div>
              <div className="BoxStructure_people">
                <span className="BoxStructure_img">
                  <img src="img/people.png" alt="people" /> - {item.p} человек
                </span>
                <span className="BoxStructure_date">{item.date}</span>
              </div>
              <div className="BoxStructure_rating">
                <div>Рейтинг поля:</div>
                <span>{item.star}</span>
              </div>
              <div className="BoxStructure_more">
                Подробнее
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoxStructure;
