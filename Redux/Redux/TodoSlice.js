import { createSlice } from "@reduxjs/toolkit"

export const TodoSlice = createSlice({
  name: "todos",
  initialState:[],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date(),
        title: action.payload.title,
        completed: false
      }
      state.push(todo)
    },
    markTodo: (state, action) => {
      const todoItemIndex = state.findIndex(item => item.id === action.payload.id)
      state[todoItemIndex].completed = action.payload.completed
    },
    deleteTodo: (state, action) => {
      return state.filter(item => item.id !== action.payload.id)
    }
  }
})

export const { addTodo, markTodo, deleteTodo } = TodoSlice.actions

export default TodoSlice.reducer
