import { useState } from "react";
import { Wheel } from "./Wheel";

const CircleStrokeColor = "#A35350";
const Center = 300;
const RingWidth = 35;
const maxR = 9 * RingWidth - 20;

type Coord = { x: number; y: number };

export default function App() {
  const [coords, setCoords] = useState<Coord[]>([]);

  function onclick(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    setCoords([...coords, { x: e.clientX, y: e.clientY }]);
  }

  return (
    <>
      <Wheel></Wheel>
      <svg
        version="1.1"
        width="100%"
        height="600"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onclick}
      >
        {coords.map((coord, i) => {
          return (
            <circle
              cx={coord.x}
              cy={coord.y - 205}
              r="7"
              stroke="yellow"
              key={i}
            />
          );
        })}
        {[...Array(10).keys()].map((i) => {
          return (
            <circle
              cx={Center}
              cy={Center}
              r={i * RingWidth - 20}
              stroke={CircleStrokeColor}
              strokeWidth="2"
              fill="none"
              key={i}
            />
          );
        })}
        <line
          x1={Center}
          y1={Center - maxR}
          x2={Center}
          y2={Center + maxR}
          stroke={CircleStrokeColor}
        />
        <line
          x1={Center - maxR}
          y1={Center}
          x2={Center + maxR}
          y2={Center}
          stroke={CircleStrokeColor}
        />
        <line
          x1={Center - Math.cos(toRadians(45)) * maxR}
          y1={Center - Math.sin(toRadians(45)) * maxR}
          x2={Center + Math.sin(toRadians(90 + 45)) * maxR}
          y2={Center + Math.sin(toRadians(90 + 45)) * maxR}
          stroke={CircleStrokeColor}
        />
        <line
          x1={Center - Math.cos(toRadians(45)) * maxR}
          y1={Center + Math.sin(toRadians(45)) * maxR}
          x2={Center + Math.sin(toRadians(90 + 45)) * maxR}
          y2={Center - Math.sin(toRadians(90 + 45)) * maxR}
          stroke={CircleStrokeColor}
        />
      </svg>
    </>
  );
}

function toRadians(angle: number) {
  return angle * (Math.PI / 180);
}
