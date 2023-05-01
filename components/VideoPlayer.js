import React from "react";
import style from "../styles/VideoPlayer.module.css";

const VideoPlayer = ({ id }) => {
  return (
    <iframe
      className={style.videoPlayer}
      frameBorder={0}
      src={`https://player.vimeo.com/video/${id}`}
    ></iframe>
  );
};

export default VideoPlayer;
