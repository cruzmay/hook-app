import React, { useEffect, useReducer } from 'react';
import { DoReducers } from './DoReducers';
import { Form } from './Form';
import { List } from './List';
import './styles.css';

    const init = () => {
        return JSON.parse(localStorage.getItem('todos'))
    }

export const AppToDo = () => {

    const [todos, dispatch] = useReducer(DoReducers, [], init)

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleDelete = (newTodo) => {
        dispatch({
            type: 'delete',
            payload: newTodo
        })
    }
    const handleToogle = (newTodo) => {
        dispatch({
            type: 'toogle',
            payload: newTodo
        })
    }

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>TodoApp</h1>
            <h4>cosas por hacer: {todos.length}</h4>
            <hr/>
            <Form
            handleAdd={handleAdd}
            />
            <List 
                handleDelete={handleDelete}
                handleToogle={handleToogle}
                todos={todos}
            />
        </div>
    )
}
