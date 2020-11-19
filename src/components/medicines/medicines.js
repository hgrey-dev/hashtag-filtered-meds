import React from "react";
import styles from "./medicines.module.css";
import Card from "../Card/Card";

const Medicines = ({ medicines }) => {
  return (
    <>
      <div className={styles.root}>
        {
        medicines.length === 1 && <div>looks like you have {medicines.length} medicine!</div>
        }
        {
        medicines.length === 0 && <div>looks like you dont have any medicines!</div>}
        {
        medicines.length >= 2 && <div>looks like you have {medicines.length} medicines!</div>
        }
      </div>
      <div>
        {medicines.map((m, i) => 
          <Card name={m.name} key={i} company={m.company} />
        )}
      </div>
    </>
  );
};

export default Medicines;
