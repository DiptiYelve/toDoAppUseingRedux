import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import AddTodo from './AddTodo';
import { deleteTodo } from '../features/todo/todoSlice';
import { markAsDone } from '../features/todo/todoSlice';

function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <AddTodo />
            <hr />
            <h2>List of Todos</h2>
            <ul>
                {
                    todos.map((res, key) => (
                        <li key={res.id}>
                            <span style={res.isDone ? {color: 'green'} : {}}>{res.task}</span> &nbsp; &nbsp; &nbsp;
                            <button onClick={() => dispatch(deleteTodo(res.id))}>Delete</button> &nbsp; &nbsp; &nbsp;
                            <button style={res.isDone ? {display: 'none'} : {}} onClick={() => dispatch(markAsDone(res.id))}>Mark As Done</button>
                        </li>
                    ))
                }
            </ul>
        </>

    )
}

export default Todo