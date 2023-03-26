import React from "react";
import { Dev, Mul, Sub, Sum } from "../../Utilites/Utilits";

const Math = () => {
  return (
    <div>
      <h2>Sum Calculation:{Sum(5, 5)}</h2>
      <h2>Sub Calculation:{Sub()}</h2>
      <h2>Mul Calculation:{Mul()}</h2>
      <h2>Dev Calculation:{Dev()}</h2>
    </div>
  );
};

export default Math;
