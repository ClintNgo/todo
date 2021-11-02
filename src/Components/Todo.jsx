import React, { useState } from 'react';

const Todo = (props) => {
    const todoClass = [];
    if(props.todo.complete){
        todoClass.push("line-through")
    }
    return(
        <div>
            <input onChange={(e)=>{props.handleChecked(props.i)}} checked ={props.todo.complete} type='checkbox'></input>
            <p className={todoClass.join('')}>{props.todo.text}</p>
            <button onClick={(e)=>{props.todoDelete(props.i)}}>Delete</button>
        </div>
    );
}

export default Todo;