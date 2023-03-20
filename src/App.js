import React from "react";
import "./index.css";

const App = () => {
  return (
    <div>
      <Colors />
      <RandomColor />
    </div>
  );
};

const boxArr = [];
for (let i = 0; i <= 31; i++) {
  if (isPrime(i)) {
    boxArr.push({ val: i, color: "red" });
  } else if (i % 2 === 0) {
    boxArr.push({ val: i, color: "green" });
  } else if (i % 2 !== 0) {
    boxArr.push({ val: i, color: "yellow" });
  }
}

// prime number
function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return false;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

const Colors = () => {
  return (
    <div className="colors">
      <h1>30 DAYS OF REACT</h1>
      <h3>Number Generator</h3>
      <div className="box">
        {boxArr.map((val, index) => {
          return (
            <div key={index} style={{ backgroundColor: val.color }}>
              {index}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// hex

const colors = [];
function generateColor() {
  let front = "#";

  const letters = "0123456789abcdef";
  for (let i = 0; i < 32; i++) {
    for (let i = 0; i < 6; i++) {
      front += letters[Math.floor(Math.random() * 16)];
    }
    colors.push(front);
    front = "#";
  }
}
generateColor();

const RandomColor = () => {
  return (
    <div className="colors">
      <h1>RandomColor</h1>
      <div className="boxes">
        {colors.map((val, index) => {
          return (
            <div
              className="random"
              key={index}
              style={{ backgroundColor: val }}
            >
              {val}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
