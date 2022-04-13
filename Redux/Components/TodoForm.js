import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useDispatch } from "react-redux"
import { addTodo } from "../Redux/TodoSlice"

const TodoForm = () => {
  const [task, setTask] = useState("")
  const dispatch = useDispatch()

  const onSubmit = event => {
    event.preventDefault()
    if (task) {
      dispatch(addTodo({ title: task }))
      setTask("")
    }
  }

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      
      <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Add todo..." value={task} onChange={event => setTask(event.target.value)}></input>

      <button type="submit" className="btn btn-primary mb-2">
        Add
      </button>
    </form>
  )
}

export default TodoForm
