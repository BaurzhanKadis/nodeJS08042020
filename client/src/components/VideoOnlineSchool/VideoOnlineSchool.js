import React from "react";
import ReactPlayer from "react-player";

import "./VideoOnlineSchool.css";

const VideoOnlineSchool = ({ lesson }) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default VideoOnlineSchool;
