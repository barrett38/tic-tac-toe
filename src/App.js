import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Square from "./Square";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const propVariable = "This is a prop";
  return (
    <div className="App">
      return (
      <Square squares={squares} setSquares={setSquares} player={player} setPlayer={setPlayer} />
      );
    </div>
  );
}

export default App;
