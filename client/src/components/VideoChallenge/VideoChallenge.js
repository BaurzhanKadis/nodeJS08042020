import React from "react";
import ReactPlayer from "react-player";
import { formatDistanceToNow } from 'date-fns'
import ruLocale from "date-fns/locale/ru";

import "./VideoChallenge.css";

const VideoChallenge = ({
  challenge,
  onToggleAdd,
  onToggleDot,
  label,
  onToggleLable,
  labelUl,
  onToggleLike
}) => {
  return (
    <div className="VideoChallenge-container">
      {challenge.map((item) => {
        return (
          <div key={item.id} className="VideoChallenge_itemContainer">
            <div className="top_info">
              <div className="top_info-avatar">
                <img src={item.img} alt="avatar" />
              </div>
              <div className="top_info-title">
                <span className="top_info-title_nickName">{item.userName}</span>
                <span className="top_info-title_fillName">{item.city}</span>
              </div>
              <div></div>
              <div
                onClick={()=>onToggleAdd(item.id)}
                className={
                  !item.add ? "challenge_add_box" : "challenge_add_box-active"
                }
              ></div>
              <div></div>
              <div 
                className="challenge_dots" 
                onClick={()=>onToggleDot(item.id)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={`modal_dot ${item.dot ? "modal_dot-active" : ""}`}>
              <ul>
                {labelUl.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={()=>onToggleLable(item.id)}
                      className={`labelClick ${
                        item.id === label ? "labelClick-active" : ""
                      }`}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              <span className="modal_dot-close"></span>
            </div>
            <div className="pleer_lesson">
              <ReactPlayer url={item.url} controls width="100%" height="100%" />
            </div>
            <ul className="infoBlock">
              <li onClick={()=>onToggleLike(item.id)}>
                <img src="img/like.png" alt="like" />
                <span>{item.like}</span>
              </li>
              <li>
                <img src="img/shares.png" alt="shares" />
                <span>241K</span>
              </li>
              <li>
                <img src="img/commit.png" alt="commit" />
                <span>104K</span>
              </li>
              <li>
                <img src="img/elect.png" alt="elect" />
              </li>
            </ul>
            <div className="title">{item.text}</div>
            <div className="date">
              Добавлено {formatDistanceToNow(new Date(item.date), { addSuffix: true, locale: ruLocale })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoChallenge;
