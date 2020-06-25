import React from "react";
import ReactPlayer from "react-player";

import "./ShowVideoBM.css";

const ShowVideoBM = ({ video, param }) => {
  //   const [ active, setActive ] = useState(false)
  // const playHandler = (id) => {
  //   console.log("id", id)
  // }
  const videoBM = video.filter(item=>{return item.type === param}).map((item, id) => {
    return (
      <div key={id} className="ShowVideoBM-wrapper">
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
          <li>
            <img src="img/like.png" alt="like" />
            <span>1000</span>
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
        <div className="date">Добавлено назад</div>
      </div>
    );
  });
  return <>{videoBM}</>;
};

export default ShowVideoBM;
