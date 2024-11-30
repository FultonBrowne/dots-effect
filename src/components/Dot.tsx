import { motion } from "framer-motion";
import React from "react";

interface DotProps {
  x: number;
  y: number;
  mouseX: number | null;
  mouseY: number | null;
}

const Dot: React.FC<DotProps> = ({ x, y, mouseX, mouseY }) => {
  // Calculate the distance from the mouse
  const distance =
    mouseX !== null && mouseY !== null
      ? Math.hypot(x - mouseX, y - mouseY)
      : Infinity;

  // Determine scale based on distance
  const maxDistance = 300; // Maximum distance for the gradient effect
  const scale = 1 + Math.max(0, (maxDistance - distance) / maxDistance); // Scale decreases as distance increases

  return (
    <motion.div
      animate={{
        scale,
        transition: { duration: 0.2 },
      }}
      style={{
        position: "absolute",
        top: y,
        left: x,
        width: 7, // Adjust dot size
        height: 7,
        borderRadius: "50%",
        background: "#0070f3",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Dot;
