import React from "react"
import { useSelector } from "react-redux"

const CompletedTodo = () => {
  const todos = useSelector(state => state.todos.filter(item => item.completed === true))

  return <h4 className="mt-3">Completed Todos: {todos.length}</h4>
}

export default CompletedTodo
