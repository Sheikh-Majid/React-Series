import { configureStore } from "@reduxjs/toolkit";
 
import TodoReducer from "../feature/todo/todoSlice"
export const store = configureStore({
    reducer : TodoReducer
});

// write additon a program in javaScript
