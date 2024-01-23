import React, { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  // CRUD FUNCTIONS

  function addTodo(todo) {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]); //... is a spread operator used fpr destructuring.
  }

  function updatedTodo(id, todo) {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  }

  // Get all the todos on app load.

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    setTodos(todos);
  }, []);

  // save to local storage on state change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updatedTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
