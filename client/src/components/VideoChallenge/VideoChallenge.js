import React from "react";
import ReactPlayer from "react-player";

import "./VideoChallenge.css";

const VideoChallenge = ({ challenge }) => {
  return (
    <div className="VideoChallenge-container">
      {challenge.map((item) => {
        return (
          <div key={item.id} className="VideoChallenge_itemContainer">

            <div className="top_info">
              <div className="top_info-avatar">
                <img src="img/freestyle.png" alt="avatar" />
              </div>
              <div className="top_info-title">
                <span className="top_info-title_nickName">
                  potapov10
                </span>
                <span className="top_info-title_fillName">Домодедово</span>
              </div>
              <div></div>
              <div className="challenge_add_box"></div>
              <div className="challenge_dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="pleer_lesson">
              <ReactPlayer url={item.url} controls width="100%" height="100%" />
            </div>
            <ul className="infoBlock">
          <li>
            <img src="img/like.png" alt="like"/>
            <span>1000</span>
          </li>
          <li>
            <img src="img/shares.png" alt="shares"/>
            <span>241K</span>
          </li>
          <li>
            <img src="img/commit.png" alt="commit"/>
            <span>104K</span>
          </li>
          <li>
            <img src="img/elect.png" alt="elect"/>
          </li>
        </ul>
        <div className="title">{item.name}</div>
        <div className="date">Добавлено 2 дня назад</div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoChallenge;
