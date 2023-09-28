import React from "react";
import style from "../styles/VideoPlayer.module.css";

const VideoPlayer = ({ id }) => {
  console.log("id", id);
  return (
    <iframe
      className={style.videoPlayer}
      frameBorder={0}
      src={`https://player.vimeo.com/video/536428289?h=02f1234d4a`}
    ></iframe>
  );
};

export default VideoPlayer;
