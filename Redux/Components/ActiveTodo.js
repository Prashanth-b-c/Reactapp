import React from "react"
import { useSelector } from "react-redux"

const ActiveTodo = () => {
  const todos = useSelector(state => state.todos.filter(item => item.completed === false))
  console.log("xx", todos)

  return (
  <div>
    <h4 className="mt-3"> Active Todos: {todos.length}</h4>
    
  </div>
  )
}

export default ActiveTodo