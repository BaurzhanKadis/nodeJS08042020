import React from "react";
import Calendar from "react-calendar";

import "./DiaryComponent.css";
import "react-calendar/dist/Calendar.css";

const DiaryComponent = ({ onChange, value }) => {
  return (
    <div className="DiaryComponent-container">
      <div className="DiaryComponent-calendar">
        <Calendar
          onChange={onChange}
          value={value}
          tileClassName={({ date }) =>
            date.getDate() === 9
              ? "trener_day"
              : date.getDate() === 10
              ? "trener_day"
              : date.getDate() === 7
              ? "trener_day"
              : date.getDate() === 12
              ? "trener_day"
              : null
          }
          tileContent={({ date }) =>
            date.getDate() === 9 ? (
              <span className="trener_day-span">Тренировка</span>
            ) : date.getDate() === 10 ? (
              <span className="trener_day-span">Тренировка</span>
            ) : date.getDate() === 7 ? (
              <span className="trener_day-span">Тренировка</span>
            ) : date.getDate() === 12 ? (
              <span className="trener_day-span">Тренировка</span>
            ) : date.getDate() === 15 ? (
              <span className="play_day-span"><img src="img/igol-red.png" alt="igol-red"/></span>
            ) : date.getDate() === 16 ? (
              <span className="play_day-span"><img src="img/igol-red.png" alt="igol-red"/></span>
            ) : date.getDate() === 19 ? (
              <span className="play_day-span"><img src="img/igol-red.png" alt="igol-red"/></span>
            ) : null
          }
        />
      </div>
      <div className="DiaryComponent-member">
        <img src="img/igol.png" alt="igol" />
        <span>Ближайшие напоминания:</span>
      </div>
      <ul className="DiaryComponent-ul">
        <li>
          15.06.2020 Тренировка в 20:00
          <div className="challenge_dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
        <li>
          16.06.2020 Тренировка в 20:00
          <div className="challenge_dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
        <li>
          19.06.2020 Игра с "Атлантом" в 12:00
          <div className="challenge_dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
      </ul>
      <div className="DiaryComponent-add_event">
        <span>Добавить событие</span>
      </div>
    </div>
  );
};

export default DiaryComponent;
