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
    <Card
      className={style.movieCard}
      style={{ width: "18rem", border: "none" }}
    >
      <Card.Img variant="top" src={movieObject.pictures.sizes[2].link} />
      <Card.Body>
        <Card.Title className={style.cardTitleContainer}>
          {movieObject.name}
        </Card.Title>
        <div className={style.movieCardBtn}>
          <Button
            className={style.plyBtn}
            style={{ background: "rgb(38,202,240)" }}
            onClick={handleClick}
          >
            <FaPlay />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
