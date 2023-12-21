import React from "react";
import { useSnapshot } from "valtio";

// Import the global state from 'store'
import state from "../store";

// The Tab component represents a tab button used for navigation or filtering.
const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  // Access the current snapshot of the global state using useSnapshot
  const snap = useSnapshot(state);

  // Define styles based on whether it's a filter tab and active
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  // Render the tab button
  return (
    <div
      // Assign a unique key based on the tab name
      key={tab.name}
      // Apply dynamic class names based on whether it's a filter tab
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
      // Attach the click event handler
      onClick={handleClick}
      // Apply dynamic styles based on the active state
      style={activeStyles}
    >
      {/* Display the tab icon */}
      <img
        // Set the source of the image based on the tab's icon property
        src={tab.icon}
        // Set the alt text based on the tab's name
        alt={tab.name}
        // Adjust the size of the image based on whether it's a filter tab
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

// Export the Tab component for use in other parts of the application
export default Tab;
