import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, endpoint, defaultCollapsed }) {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}${endpoint}`);
      setData(response.data);
    };
    fetchData();
  }, [endpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={styles.toggle}
        >
          {collapsed ? "Show all" : "Collapse"}
        </button>
      </div>

      {!collapsed && (
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
      )}
    </div>
  );
}

export default Section;
