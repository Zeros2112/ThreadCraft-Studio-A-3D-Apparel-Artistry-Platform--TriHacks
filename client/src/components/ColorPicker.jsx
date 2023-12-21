import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

// Importing the state from the Valtio store
import state from "../store";

// ColorPicker component for selecting and updating colors
const ColorPicker = () => {
  // Accessing the current state using useSnapshot
  const snap = useSnapshot(state);

  return (
    // Container for the color picker, positioned to the left of the element it's associated with
    <div className="absolute left-full ml-3">
      {/* Using SketchPicker from react-color to allow users to pick a color */}
      <SketchPicker
        // Setting the initial color of the picker to the current color in the state
        color={snap.color}
        // Disabling the alpha (transparency) option in the color picker
        disableAlpha
        // Handling color changes and updating the color in the state
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
