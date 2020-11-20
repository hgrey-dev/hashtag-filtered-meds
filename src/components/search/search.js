import React, { useState } from "react";
import styles from "./search.module.css";

const Search = (props) => {


  return (
    <div className={styles.root}>
      <input
        onChange= {props.onChange}
        aria-label="search"
        className={styles.search}
        placeholder="filter meds"
        type="search"
      ></input>
    </div>
  );
};

export default Search;
