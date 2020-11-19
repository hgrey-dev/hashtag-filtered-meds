import React from "react";
import styles from "./search.module.css";

const Search = () => {
  return (
    <div className={styles.root}>
      <input
        aria-label="search"
        className={styles.search}
        placeholder="filter meds"
        type="search"
      ></input>
    </div>
  );
};

export default Search;
