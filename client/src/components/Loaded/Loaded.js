import React, {useEffect} from 'react';
// import ReactPlayer from 'react-player';
import './Loaded.css';

const Loaded = () => {
  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let response = await fetch('video/load.mp4')
  //   }
  //   fetchMyAPI()
  // }, [])
  const lll = <video src="video/load.mp4" autoPlay width="100%" height="100%"></video>
  // useEffect( async () => {
  //   await lll;
  //  });
  return (
    <div className="Loaded">
      {/* <ReactPlayer url="video/load.mp4" playing={true} loop width='100%' height='100%'/> */}
      {lll}
    </div>
  );
};

export default Loaded;