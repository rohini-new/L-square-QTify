import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import BASE_URL from "../../config";
import Card from "../Card/Card";
import styles from "./Songs.module.css";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [songsRes, genresRes] = await Promise.all([
          axios.get(`${BASE_URL}/songs`),
          axios.get(`${BASE_URL}/genres`),
        ]);

        setSongs(songsRes.data); // plain array
        setGenres(genresRes.data.data); // { data: [...] }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const tabs = [{ key: "all", label: "All" }, ...genres];

  const filteredSongs =
    selectedTab === 0
      ? songs
      : songs.filter(
          (song) => song.genre?.key === genres[selectedTab - 1]?.key,
        );

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Songs</h2>
      </div>

      <Tabs
        value={selectedTab}
        onChange={(e, newVal) => setSelectedTab(newVal)}
        classes={{ root: styles.tabs }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            label={tab.label}
            classes={{ root: styles.tab, selected: styles.tabSelected }}
          />
        ))}
      </Tabs>

      <div className={styles.grid}>
        {filteredSongs.map((song) => (
          <Card
            key={song.id}
            image={song.image}
            likes={song.likes}
            title={song.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Songs;
