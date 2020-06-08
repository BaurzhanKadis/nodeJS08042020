import React, {useState} from 'react';
import ReactPlayer from 'react-player';

import './ShowVideoBM.css';

const ShowVideoBM = ({ video }) => {
  const [ active, setActive ] = useState(false)
const playHandler = (id) => {
  console.log("id", id)
}
  const videoBM = video.map((item) => {
    return (
      <div className="ShowVideoBM-wrapper">
        <div className="top_info">
          <div className="top_info-avatar">
            <img src="img/avatar.png" alt="avatar"/>
          </div>
          <div className="top_info-title">
            <span className="top_info-title_nickName">world of football</span>
            <span className="top_info-title_fillName">Париж</span>
          </div>
        </div>
        <div className="ReactPlayer-wrapper">
          <ReactPlayer url={item.url} controls width='100%' height='100%'/>
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
        <div className="title">{item.title}</div>
        <div className="date">Добавлено назад</div>
      </div>
    );
  });
  return (
    <>
      {videoBM}
    </>
  );
};

export default ShowVideoBM;