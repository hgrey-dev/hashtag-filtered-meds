import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h3 className={styles.h3}>
          #no-filter meds store
          </h3>
       <p className={styles.p}>{props.children}</p>
        
      </header>
    </>
  );
};

export default Header;
