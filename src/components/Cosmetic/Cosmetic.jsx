import React from "react";
import "./Cosmetic.css"

const Cosmetic = (props) => {
  const { name, age, gender, id } = props.cosmetic;
  return (
    <div className="cosmetic-container">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>id: {id}</p>
    </div>
  );
};

export default Cosmetic;
