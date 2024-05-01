import React from "react";
import { useRouter } from "next/router";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaPlay } from "react-icons/fa";

import style from "../styles/Moviecard.module.css";

const MovieCard = ({ movieObject }) => {
  const router = useRouter();

  const extractIframeId = (vimeoUrl) => {
    const parts = vimeoUrl.split("/"); // Split the URL by "/"
    const videoId = parts[parts.length - 1]; // Get the last part of the array
    return videoId;
  };

  const handleClick = () => {
    const videoId = extractIframeId(movieObject.player_embed_url);
    router.push(`/media/videos/iframe?vimeoid=${videoId}`);
  };

  return (
    <div className={style.resultItem} onClick={handleClick}>
      <img
        src={movieObject.pictures.sizes[4].link}
        style={{ width: "100%", height: "100%" }}
      />

      {/* <div className={style.movieCardBtn}>
          <Button onClick={handleClick}>
            <FaPlay />
          </Button>
        </div> */}
    </div>
  );
};

export default MovieCard;
