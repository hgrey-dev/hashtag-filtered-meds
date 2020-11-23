import React from "react";
import styles from "./medicines.module.css";
import Card from "../Card/Card";

//use filteredMedicine function to return list of filtered medicines
//Add syntactic message nicities
const Medicines = ({ filteredMedicine }) => {
  return (
    <>
      <div className={styles.root}>
        {filteredMedicine.length === 1 && (
          <div>looks like you have {filteredMedicine.length} medicine!</div>
        )}
        {filteredMedicine.length === 0 && (
          <div>looks like you don't have any medicines!</div>
        )}
        {filteredMedicine.length >= 2 && (
          <div>looks like you have {filteredMedicine.length} medicines!</div>
        )}
      </div>
      <div>
        {filteredMedicine.map((m, i) => (
          <Card name={m.name} key={i} company={m.company} />
        ))}
      </div>
    </>
  );
};

export default Medicines;
