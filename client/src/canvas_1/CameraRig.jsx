import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath"; // Assuming 'maath' is a library for easing functions
import { useSnapshot } from "valtio";

import state from "../store/index.js";

// CameraRig component manages camera position and rotation based on user interactions
const CameraRig = ({ children }) => {
  // Create a reference for the group containing the camera
  const group = useRef();

  // Use the Valtio hook to get a snapshot of the state
  const snap = useSnapshot(state);

  // useFrame is a hook provided by react-three/fiber to perform actions on each frame
  useFrame((state, delta) => {
    // Check if the window width is less than or equal to 1260 pixels
    const isBreakpoint = window.innerWidth <= 1260;

    // Check if the window width is less than or equal to 600 pixels
    const isMobile = window.innerWidth <= 600;

    // Set the initial position of the model based on intro state
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // Set the model camera position using easing.damp3 function
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Set the model rotation smoothly using easing.dampE function
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  // Return a group with the ref containing the children (components to be rendered)
  return <group ref={group}>{children}</group>;
};

export default CameraRig;
