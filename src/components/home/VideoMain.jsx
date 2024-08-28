import React from "react";
import video from "../../../src/assets/video/main.mp4";
import "./VideoMain.scss";

const VideoMain = () => {
  return (
    <video className="video-main" autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default VideoMain;
