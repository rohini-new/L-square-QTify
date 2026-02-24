import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, follows, title, likes }) {
  const chipLabel =
    likes !== undefined ? `${likes} Likes` : `${follows} Follows`;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <Chip label={chipLabel} className={styles.chip} />
      </div>
      <div className={styles.bottom}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
