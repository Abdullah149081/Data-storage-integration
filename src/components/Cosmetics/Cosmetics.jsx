import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import "./Cosmetics.css";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="d-grid">
        {cosmetics.map((cosmetic) => (
          <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
