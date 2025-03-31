import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] === null) {
      const newMatrix = [...matrix];
      newMatrix[index] = "green";
      setMatrix(newMatrix);
      setClickOrder([...clickOrder, index]);

      if (clickOrder.length + 1 === 9) {
        clickOrder.forEach((idx, i) => {
          setTimeout(() => {
            setMatrix((prevMatrix) => {
              const updatedMatrix = [...prevMatrix];
              updatedMatrix[idx] = "orange";
              return updatedMatrix;
            });
          }, i * 500);
        });
      }
    }
  };

  return (
    <div className="matrix-container">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color || "white" }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
