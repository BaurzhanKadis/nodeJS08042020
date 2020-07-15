import React from "react";
import ReactPlayer from "react-player";
import { formatDistanceToNow } from 'date-fns'
import ruLocale from "date-fns/locale/ru";

import "./ShowVideoBM.css";

const ShowVideoBM = ({ video, param, onToggleLike }) => {
  const videoBM = video.filter(item=>{return item.type === param}).map((item) => {
    return (
      <div key={item.id} className="ShowVideoBM-wrapper">
        <div className="top_info">
          <div className="top_info-avatar">
            <img src={item.img} alt="avatar" />
          </div>
          <div className="top_info-title">
            <span className="top_info-title_nickName">{item.name}</span>
            <span className="top_info-title_fillName">{item.city}</span>
          </div>
        </div>
        <div className="ReactPlayer-wrapper">
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
        <div className="title">{item.title}</div>
        <div className="date">
          Добавлено {formatDistanceToNow(new Date(item.date), { addSuffix: true, locale: ruLocale })}
        </div>
      </div>
    );
  });
  return <>{videoBM}</>;
};

export default ShowVideoBM;
