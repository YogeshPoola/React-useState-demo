import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Room() {
  const [isLit, setLit] = React.useState(true);
  const lightedness = isLit ? "lit" : "dark";
  const [currTemp, setTemp] = React.useState(22);
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>
      <br />
      <button onClick={() => setLit(true)}>On</button>
      <br />
      <button onClick={() => setLit(false)}>Off</button>
      <br />
      <h2>The Room Temperature is {currTemp} celsius </h2>
      <br />
      <button onClick={() => setTemp(currTemp + 1)}>+</button>
      <br />
      <button onClick={() => setTemp(currTemp - 1)}>-</button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));
