import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: nanoid(),
            task: "Sample task",
            isDone: false
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            }
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((res) => res.id != action.payload)
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((res) => {
                if (res.id === action.payload) {
                    res.isDone = true
                }
                return res;
            })
        }
    },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions

export default todoSlice.reducer