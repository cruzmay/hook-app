import React, { useEffect, useReducer } from 'react';
import './styles.css'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

 const init = () => {
     return JSON.parse(localStorage.getItem('todos'))
 }

export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleDelete = (todoId) => {
        console.log(todoId)
        const deleteAction = {
            type: 'delete',
            payload: todoId
        }
        dispatch(deleteAction)
    }

    const handleToogle = (todoId) => {
        // console.log(todoId)
        dispatch({
            type: 'toogle',
            payload: todoId
        })
    }

    const handleAddToDo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <TodoAdd
                handleAddToDo={handleAddToDo}
            />
            <TodoList
                todos = {todos}
                handleDelete={handleDelete}
                handleToogle={handleToogle}
            />
        </div>
    )
}
