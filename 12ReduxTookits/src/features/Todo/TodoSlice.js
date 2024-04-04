import { createSlice , nanoid } from "@reduxjs/toolkit"

// nanoid >>> Its provide unique Id

const InitialState = {
    todos: [
        {
            id: 1,
            text : "Hello world"
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    InitialState,
    reducers: {
        addTodo: (state, action) => { 
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
    
})

export const {addTodo , removeTodo} = todoSlice.actions
export default todoSlice.reducer

// state = ye humko bata h inital State me kya value h current me
// action = it is like a target  or jo bhi data Pass ho raha h