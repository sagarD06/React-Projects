import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSLice";

export const store = configureStore({
    reducer: todoReducer
});
