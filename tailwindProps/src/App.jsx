import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl text-black-400 mb-4">
        Tailwind test
      </h1>
      <Card userName="Sagar" btnText = "Click to visit"/>
    </>
  );
}

export default App;
