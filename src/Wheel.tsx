import React from "react";

export function Wheel() {
  const [score, setScore] = React.useState<number | undefined>(undefined);

  return (
    <svg
      version="1.1"
      width="100%"
      height="600"
      viewBox="0 0 600 600"
      preserveAspectRatio="xMinYMin meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(10).keys()].map((i) => {
        return (
          <path
            d={sectorPath({
              x: 350,
              y: 350,
              radius: i * 30,
              spread: 30,
              startAngle: 0,
              endAngle: 45,
            })}
            stroke="skyblue"
            fill={score === i ? "skyblue" : "none"}
            onClick={() => {
              console.log("clicked", i);
              setScore(i);
            }}
            key={i}
          />
        );
      })}
    </svg>
  );
}

function sectorPath({
  x,
  y,
  radius,
  spread,
  startAngle,
  endAngle,
}: {
  x: number;
  y: number;
  radius: number;
  spread: number;
  startAngle: number;
  endAngle: number;
}) {
  const innerStart = polarToCartesian(x, y, radius, endAngle);
  const innerEnd = polarToCartesian(x, y, radius, startAngle);
  const outerStart = polarToCartesian(x, y, radius + spread, endAngle);
  const outerEnd = polarToCartesian(x, y, radius + spread, startAngle);

  const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    outerStart.x,
    outerStart.y,
    "A",
    radius + spread,
    radius + spread,
    0,
    arcSweep,
    0,
    outerEnd.x,
    outerEnd.y,
    "L",
    innerEnd.x,
    innerEnd.y,
    "A",
    radius,
    radius,
    0,
    arcSweep,
    1,
    innerStart.x,
    innerStart.y,
    "L",
    outerStart.x,
    outerStart.y,
    "Z",
  ].join(" ");
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const a = angleInRadians(angleInDegrees);
  return {
    x: centerX + radius * Math.cos(a),
    y: centerY + radius * Math.sin(a),
  };
}

function angleInRadians(angleInDegrees: number) {
  return (angleInDegrees - 90) * (Math.PI / 180.0);
}
