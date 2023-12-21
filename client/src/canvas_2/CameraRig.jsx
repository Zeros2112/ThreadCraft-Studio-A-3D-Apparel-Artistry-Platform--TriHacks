import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../store/index_2.js";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = [-2.7, 0, 4];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [-2.7, 0, 4];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [-2.7, 0, 4];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 10, delta);

    // set the model rotation smoothly
    const rotationX = snap.intro ? Math.PI - 0.5236 * 2 : 0; // Rotate 180 degrees in x-direction if intro
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, state.pointer.x / 5 + rotationX, 0],
      50,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
