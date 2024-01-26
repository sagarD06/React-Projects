import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo, updateTodo } from "../features/todo/todoSLice";
import { useSelector } from "react-redux";

export function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const editableTodo = useSelector((state) => state.todos);

  const todo = editableTodo.find((todo) => todo.isEditable == true);

  console.log(editableTodo);
  console.log("TrueTodo", todo);

  const addTodoHandler = (e) => {
    e.preventDefault();
    todo
      ? dispatch(updateTodo({ id: todo.id, text: input }))
      : dispatch(addTodo(input));
    setInput("");
    todo && dispatch(editTodo(todo.id))
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder={todo ? todo.text : "Enter a Todo..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 
        rounded text-lg ${todo && " bg-amber-500  hover:bg-amber-600"}`}
      >
        {todo ? "Edit Todo" : "Add Todo"}
      </button>
    </form>
  );
}
