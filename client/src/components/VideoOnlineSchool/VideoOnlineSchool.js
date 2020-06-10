import React from "react";
import ReactPlayer from "react-player";

import "./VideoOnlineSchool.css";

const VideoOnlineSchool = ({ lesson }) => {
  return (
    <div>
      {lesson.map((item) => {
        return (
          <div key={item.id}>
            <div id={`sec${item.id}`} className="top_infoLesson">
              Урок № {item.id}
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
