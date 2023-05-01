import React from "react";
import { useRouter } from "next/router";
import { LOCAL_DEV } from "@/globals";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaPlay } from "react-icons/fa";

import style from "../styles/Moviecard.module.css";

const MovieCard = ({ movieObject }) => {
  const router = useRouter();

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
            onClick={() => router.push(`${LOCAL_DEV}/media/${movieObject.uri}`)}
          >
            <FaPlay />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
