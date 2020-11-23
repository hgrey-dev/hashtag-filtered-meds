// create reusable card component with styling
import React from "react";
const mystlez = {
  padding: "15px",
  margin: "15px",
  border: "none",
  background: "peachpuff",
};
const Card = (props) => {
  return (
    <div style={mystlez}>
      <h3>{props.name}</h3>
      <p>{props.company}</p>
    </div>
  );
};

export default Card;