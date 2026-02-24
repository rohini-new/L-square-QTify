import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";
import styles from "./Songs.module.css";

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await axios.get(`${BASE_URL}/songs`);
      setSongs(response.data);
    };

    fetchSongs();
  }, []);

  return (
    <div className={styles.section}>
      <h2>Songs</h2>

      <div className={styles.grid}>
        {songs.map((song) => (
          <div key={song.id} className={styles.card}>
            <img src={song.image} alt={song.title} />
            <div className={styles.bottom}>
              <p className={styles.title}>{song.title}</p>
              <p className={styles.artists}>{song.artists.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Songs;
