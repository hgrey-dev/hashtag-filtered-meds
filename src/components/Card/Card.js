// create reusable card component with styling
import React from "react";
import styles from "./cards.module.css";

const Card = (props) => {
  return (
    <div className={styles.mystlez}>
      <a
        href={`https://duckduckgo.com/?q=${props.name}&t=braveed&ia=web`}
        target="_blank"
      >
        {<h3>{props.name}</h3>}
      </a>
      <p>{props.company}</p>
    </div>
  );
};

export default Card;
