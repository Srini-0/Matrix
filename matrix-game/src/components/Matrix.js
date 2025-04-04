import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(null)); // Initialize 3x3 matrix
  const [clickOrder, setClickOrder] = useState([]); // Track order of clicks

  const handleClick = (index) => {
    if (matrix[index] === null) {
      const newMatrix = [...matrix];
      newMatrix[index] = "green";
      setMatrix(newMatrix);
      const newClickOrder = [...clickOrder, index];
      setClickOrder(newClickOrder);

      if (newClickOrder.length === 9) {
        // Start changing colors to orange in order
        newClickOrder.forEach((idx, i) => {
          setTimeout(() => {
            setMatrix((prevMatrix) => {
              const updatedMatrix = [...prevMatrix];
              updatedMatrix[idx] = "orange";
              return updatedMatrix;
            });
          }, i * 500);
        });

        // Reset all boxes to white after all turn orange
        setTimeout(() => {
          setMatrix(Array(9).fill(null)); // Reset to original white state
          setClickOrder([]); // Clear click order
        }, 500 * 9 + 1000); // Reset after all boxes have changed
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

