import logo from "./logo.svg";
import "./App.css";
import Square from "./Square";

function App() {
  const propVariable = "This is a prop";
  return (
    <div className="App">
      return (
      <Square propVar={propVariable} />
      );
    </div>
  );
}

export default App;
