import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, follows, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <Chip label={`${follows} Follows`} className={styles.chip} />
      </div>
      <div className={styles.bottom}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
