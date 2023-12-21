import React from "react";
import { useSnapshot } from "valtio";

// Importing the global state and a helper function from the Valtio store and config
import state from "../store";
import { getContrastingColor } from "../config/helpers";

// CustomButton component for creating customizable buttons
const CustomButton = ({ type, title, customStyles, handleClick }) => {
  // Accessing the current state using useSnapshot
  const snap = useSnapshot(state);

  // Function to generate dynamic styles based on button type (filled or outline)
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    // Button element with dynamic styles and onClick handler
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
