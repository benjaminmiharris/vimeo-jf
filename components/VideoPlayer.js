import React from "react";
import style from "../styles/VideoPlayer.module.css";

const VideoPlayer = ({ videoId }) => {
  return (
    <iframe
      className={style.videoPlayer}
      frameBorder={0}
      src={`https://player.vimeo.com/video/${videoId}`}
    ></iframe>
  );
};

export default VideoPlayer;
