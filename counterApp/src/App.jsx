import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function addValue() {
    count <= 20 && setCount(count++);
  }

  function removeValue() {
    count >= 0 && setCount(count--);
  }
  return (
    <>
      <h1>Hello world! | chai aur react | chah mathu React!</h1>
      <h2>Current count is {count}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
