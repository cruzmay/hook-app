import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToogle}) => {
    return (
        <ul>
            {
                todos.map((todo, i)=> 
                    <TodoListItem 
                        {...todo}
                        key={todo.id}
                        handleDelete={handleDelete}
                        handleToogle={handleToogle}
                        index = {i}
                    />
                )
            }
            
        </ul>
    )
}
