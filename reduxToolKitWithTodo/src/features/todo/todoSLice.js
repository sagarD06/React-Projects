import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // state will have the latest or current state, and actions will have the values that we canuse to set the state.
      const newTodo = {
        id: nanoid(), //Creates unique id's
        text: action.payload, //auto detects text when we use param as text.
        isEditable: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isEditable: !todo.isEditable }
          : todo
      );
    },
  },
});

// Action creators are generated for each case reducer function and we need to export these individually so that we can get access easily while setting the state.

export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
