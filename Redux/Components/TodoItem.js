import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useDispatch } from "react-redux"
import { deleteTodo, markTodo } from "../Redux/TodoSlice"

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()

  const handleCheckBoxToggle = () => {
    dispatch(markTodo({ id, completed: !completed }))
  }

  const handleDeleteItem = () => {
    dispatch(deleteTodo({ id }))
  }

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input onClick={handleCheckBoxToggle} type="checkbox" className="mr-3" checked={completed}></input>
          {title}
        </span>
        <button onClick={handleDeleteItem} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
