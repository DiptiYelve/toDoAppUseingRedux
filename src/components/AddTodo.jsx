import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [task, setTask] = useState();
    const dispatch = useDispatch();

    function handalChange(e){
        setTask(e.target.value);
    }

    function handalSubmit(e){
        e.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }
  return (
    <div>
        <input type="text" placeholder='Add new task...' value={task} onChange={handalChange}/> <br /> <br />
        <button onClick={handalSubmit}>Add Task</button>
    </div>
  )
}

export default AddTodo