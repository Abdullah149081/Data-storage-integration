import React from "react";
import { addToCartDB } from "../../Utility/Fakedb";

import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, age, gender, id } = props.cosmetic;
  // localStorage
  const addToCart = () => {
    addToCartDB(id);
  };
  // reset
  const resetDB = () => {
    localStorage.clear();
  };

  return (
    <div className="cosmetic-container space-y-4">
      <h2 className="text-3xl font-bold">Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>id: {id}</p>
      <button onClick={() => addToCart(id)} className="btn ">
        Add to cart
      </button>
      <button className="btn" onClick={resetDB}>
        Reset
      </button>
    </div>
  );
};

export default Cosmetic;
