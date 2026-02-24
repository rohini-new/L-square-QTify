import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, endpoint, defaultCollapsed = false }) {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

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

  const visibleData = collapsed ? data.slice(0, 7) : data;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.toggle}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show all" : "Collapse"}
        </button>
      </div>

      <div className={styles.grid}>
        {visibleData.map((item) => (
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
