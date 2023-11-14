function App() {
  const maxR = 9 * 35 - 20;
  return (
    <>
      <svg
        version="1.1"
        width="100%"
        height="600"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(10).keys()].map((i) => {
          console.log(i * 35 - 20);
          return (
            <circle
              cx="300"
              cy="300"
              r={i * 35 - 20}
              stroke="#935350"
              strokeWidth="2"
              fill="none"
              key={i}
            />
          );
        })}
        <line
          x1="300"
          y1={300 - maxR}
          x2="300"
          y2={300 + maxR}
          stroke="#935350"
        />
        <line
          x1={300 - maxR}
          y1="300"
          x2={300 + maxR}
          y2="300"
          stroke="#935350"
        />
        <line
          x1={300 - Math.cos(toRadians(45)) * maxR}
          y1={300 - Math.sin(toRadians(45)) * maxR}
          x2={300 + Math.sin(toRadians(90 + 45)) * maxR}
          y2={300 + Math.sin(toRadians(90 + 45)) * maxR}
          stroke="#935350"
        />
        <line
          x1={300 - Math.cos(toRadians(45)) * maxR}
          y1={300 + Math.sin(toRadians(45)) * maxR}
          x2={300 + Math.sin(toRadians(90 + 45)) * maxR}
          y2={300 - Math.sin(toRadians(90 + 45)) * maxR}
          stroke="#935350"
        />
      </svg>
    </>
  );
}

// <line x1="600" y1="0" x2="0" y2="600" stroke="#935350" />
function toRadians(angle: number) {
  return angle * (Math.PI / 180);
}

export default App;
