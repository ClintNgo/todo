import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Todo from "./Components/Todo"

function App() {

  const[newTodo, setNewTodo] = useState("");
  const[showTodo, setShowTodo] = useState([]);

  const handleTodo =(e) =>{
    e.preventDefault();
    if (newTodo.length ===0){
      return false;
    }
    const todoItem = {
      text: newTodo,
      complete: false
    }
    setShowTodo([...showTodo, todoItem]);
    setNewTodo('');
  }

  const todoDelete = (id) =>{
    const filterTodo = showTodo.filter((todo, i)=>{
      return i !== id;
    })
    setShowTodo(filterTodo)
  }

  const handleChecked = (idx) =>{
    const updateTodo = showTodo.map((todo,i) =>{
      if (idx === i){
        const updated = {...todo, complete: !todo.complete}
        return updated
      }
      return todo
    })
    setShowTodo(updateTodo)
  }


  return (
    <div >
      <form onSubmit={handleTodo}>
        <input type='text' onChange={(e)=>setNewTodo(e.target.value)} value={newTodo}></input>
        <input type='submit' value='+ Add'></input>
      </form>
      {
        showTodo.map((todo,i)=>{
          return(
            <Todo key={i} todo={todo} handleChecked={handleChecked} todoDelete={todoDelete} i={i}></Todo>
          )
        })
      }
    </div>
  );
}

export default App;
