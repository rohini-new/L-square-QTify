import React from "react";
import styles from "./Search.module.css";

function Search({ placeholder }) {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder} required />
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
