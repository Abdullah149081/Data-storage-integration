import React from "react";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, age, gender, id } = props.cosmetic;
  const addToCart = () => {
    console.log("click", id);
  };

  const cart = () => addToCart(id);

  return (
    <div className="cosmetic-container space-y-4">
      <h2 className="text-3xl font-bold">Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>id: {id}</p>
      <button onClick={cart} className="btn ">
        Add to cart
      </button>
    </div>
  );
};

export default Cosmetic;
