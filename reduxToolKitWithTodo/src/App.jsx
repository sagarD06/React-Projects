import React from 'react';
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todo";

function App() {
  return (
    <>
      <h1 className='text-3xl text-purple-500 font-bold'>To-Do using Redux tool kit</h1>
      <TodoForm />
      <Todos />
    </>
  );
}

export default App;
