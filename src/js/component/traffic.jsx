import React, { useState } from "react";

const Traffic = () => {
  const [colors, setColor] = useState(["red", "yellow", "green"]);
  const [currentColor, setCurrentColor] = useState(0);

  const changeLight = () => {
    // Increment the index, and wrap around if it goes beyond the array length
    setCurrentColor((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className="container">
      <div className="trafficLight">
        {colors.map((color, index) => (
          <span
            key={color}
            className={` ${color} ${
                currentColor === index ? "glow" : ""
            }`}
            onClick={() => setCurrentColor(index)}
          ></span>
        ))}
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={changeLight}
      >
        Change Light
      </button>
    </div>
  );
};

export default Traffic;