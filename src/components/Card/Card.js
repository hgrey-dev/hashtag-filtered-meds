// create reusable card component with styling
import React from "react";
import styles from "./cards.module.css";

const Card = (props) => {
  return (
    <div className={styles.mystlez}>
      <h3>{props.name}</h3>
      <p>{props.company}</p>
    </div>
  );
};

export default Card;