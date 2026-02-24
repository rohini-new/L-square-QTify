import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, endpoint }) {
  const [data, setData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [endpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.toggle}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Collapse" : "Show all"}
        </button>
      </div>

      <div className={styles.grid}>
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            follows={item.follows}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
