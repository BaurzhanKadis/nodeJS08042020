import React from "react";
import ReactPlayer from "react-player";

import "./VideoOnlineSchool.css";

const VideoOnlineSchool = ({ lesson, onToggleLike }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      {lesson.map((item, id) => {
        return (
          <div key={id}>
            <div id={`sec${id+1}`} className="top_infoLesson">
              Выпуск № {id+1}
              <span> {item.name}</span>
            </div>
            <div className="pleer_lesson">
              <ReactPlayer url={item.url} controls width="100%" height="100%" />
            </div>
            <ul className="infoBlock">
              <li className="like-item" onClick={()=>onToggleLike(item.id)}>
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
          </div>
        );
      })}
    </div>
  );
};

export default VideoOnlineSchool;
