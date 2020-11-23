import React from "react";
import styles from "./search.module.css";

//use setSearch state to conect search component to filteredmedicines function
//create onchange event listener
const Search = ({ setSearch }) => {
  return (
    <div className={styles.root}>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        aria-label="search"
        className={styles.search}
        placeholder="filter meds"
        type="search"
      ></input>
    </div>
  );
};

export default Search;
