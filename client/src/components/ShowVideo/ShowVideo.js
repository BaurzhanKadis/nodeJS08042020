import React from 'react';
import YouTube from 'react-youtube';

import "./ShowVideo.css";

const videoOnReady = (event) => {
  // access to player in all event handlers via event.target
  event.target.playVideoAt(30);
  console.log(event.target)
}
const circumference = 2*Math.PI*25;
const progress = (procent) => {
  const offset = circumference - procent/100 * circumference;
  return offset;
};
 
const ShowVideo = ({ video, disLikeHandler, likeHandler, deleteItem, opts}) => {
  // const [disLikeAction, setDisLikeAction] = useState(false)
  const youtube =  video.map((item) => {
    const ed = item.like + item.disLike;
    const procent = Math.round(item.like/ed*100);
    const twoActionLike = () => {
      likeHandler(item.id)
      // setTimeout(()=>{likeHandler(item.id)}, 500)
      setTimeout(()=>{deleteItem(item.id)}, 1500)
    }
    const twoActionDisLile = () => {
      // setDisLikeAction(!disLikeAction)
      disLikeHandler(item.id)
      // setTimeout(()=>{disLikeHandler(item.id)}, 500)
      setTimeout(()=>{deleteItem(item.id)}, 1500)
    }
    return (
      <div 
        key={item.id} 
        style={{transformOrigin: `${item.left ? "bottom left" : item.right ? "bottom right" : ""}`}}
        className={`showVideo-container ${item.right ? "showVideo-container_likeDel" : item.left ? "showVideo-container_disLikeDel" : ""}`} >
      <div className="top_info">
        <div className="top_info-avatar">
          <img src="img/avatar.png" alt="avatar"/>
        </div>
        <div className="top_info-title">
          <span className="top_info-title_nickName">novikov19</span>
          <span className="top_info-title_fillName">Новиков Александр</span>
        </div>
      </div>
      <React.Fragment>
        <YouTube videoId={item.videoId} opts={opts} onReady={videoOnReady} />
        <div className="progress_bar">
          <span className="procent">{procent}%</span>
          <svg>
            <circle className="circle" cx="25" cy="25" r="25"></circle>
            <circle 
              style={{ 
                strokeDasharray: `${circumference} ${circumference}`,
                strokeDashoffset: `${progress(procent)}` 
              }} 
              className="circle2" cx="25" cy="25" r="25"
            ></circle>
          </svg>
        </div>
      </React.Fragment>
      <ul className="infoBlock">
        <li>
          <img src="img/like.png" alt="like"/>
          <span>{item.like}</span>
        </li>
        <li>
          <img src="img/kill.png" alt="kill"/>
          <span>{item.disLike}</span>
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
        <div className="buttonDisLike" onClick={twoActionDisLile} >
          <img src="img/kill.png" alt="kill"/>
          <span>kill</span>
        </div>
        <div className="buttonLike" onClick={twoActionLike}>
          <span>like</span>
          <img src="img/like.png" alt="like"/>
        </div>
      </div>
      <div className="sheres">
        <span><img src="img/shares.png" alt="shares"/>Поделится</span>
      </div>
    </div>
          );
  })
  return (
    <div style={{ overflow: "hidden", height: "100vh", position: "relative", width: "100%" }}>
      {youtube}
    </div>
  );
};

export default ShowVideo;