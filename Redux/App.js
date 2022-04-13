import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import CompletedTodo from './Components/CompleteTodo';
import ActiveTodo from './Components/ActiveTodo';




function App() {


  return (
    <div  className='app'  >
      <div className="container bg-secondary p-4  mt-5" >
        <h1>My Todo</h1>
        <TodoForm />
        <TodoList />
        <TodoItem />
        <CompletedTodo />
        <ActiveTodo />
      </div>
    </div>


  );
}

export default App;
