import React, { useState } from 'react';
import YouTube from 'react-youtube';

import "./ShowVideo.css";

const videoOnReady = (event) => {
  // access to player in all event handlers via event.target
  event.target.playVideoAt(30);
  console.log(event.target)
}

const ShowVideo = () => {
  const [disLike, setDisLike] = useState(98);
  const [like, setLike] = useState(541);

  const disLikeHandler = () => {
    setDisLike(disLike+1);
  }
  const likeHandler = () => {
    setLike(like+1);
  }
  const opts = {
    // height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
      showinfo: 0,
      iv_load_policy: 3,
      rel: 0,
      showinfo: 0,
      modestbranding: 1
    },
  };
  return (
    <div className="showVideo-container">
      <div className="top_info">
        <div className="top_info-avatar">
          <img src="img/avatar.png" alt="avatar"/>
        </div>
        <div className="top_info-title">
          <span className="top_info-title_nickName">novikov19</span>
          <span className="top_info-title_fillName">Новиков Александр</span>
        </div>
      </div>
      <YouTube videoId="8eZJ9Sinnxg" opts={opts} onReady={videoOnReady} />
      <ul className="infoBlock">
        <li>
          <img src="img/like.png" alt="like"/>
          <span>{like}</span>
        </li>
        <li>
          <img src="img/kill.png" alt="kill"/>
          <span>{disLike}</span>
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
      <div className="bottum_buttons-container">
        <div 
          className="buttonDisLike"
          onClick={disLikeHandler}>
          <img src="img/kill.png" alt="kill"/>
          <span>kill</span>
        </div>
        <div 
          className="buttonLike"
          onClick={likeHandler}>
          <span>like</span>
          <img src="img/like.png" alt="like"/>
        </div>
      </div>
    </div>
  );
};

export default ShowVideo;