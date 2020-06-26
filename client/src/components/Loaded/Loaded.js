import React from 'react';
import ReactPlayer from 'react-player';
import './Loaded.css';

const Loaded = () => {
  return (
    <div className="Loaded">
      <ReactPlayer url="video/load.mp4" playing={true} muted width='100%' height='100%'/>
    </div>
  );
};

export default Loaded;