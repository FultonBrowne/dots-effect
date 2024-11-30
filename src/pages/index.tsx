import React, { useState, useEffect } from "react";
import Dot from "@/components/Dot";

const Home: React.FC = () => {
  const [dots, setDots] = useState<{ x: number; y: number }[]>([]);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);

  useEffect(() => {
    const generateDots = () => {
      const dotSpacing = 50; // Space between dots
      const cols = Math.ceil(window.innerWidth / dotSpacing);
      const rows = Math.ceil(window.innerHeight / dotSpacing);

      const generatedDots = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          generatedDots.push({ x: i * dotSpacing, y: j * dotSpacing });
        }
      }
      setDots(generatedDots);
    };

    // Generate dots on load and on resize
    generateDots();
    window.addEventListener("resize", generateDots);

    return () => {
      window.removeEventListener("resize", generateDots);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "#f0f0f0",
        overflow: "hidden",
      }}
    >
      {dots.map((dot, index) => (
        <Dot key={index} x={dot.x} y={dot.y} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  );
};

export default Home;
