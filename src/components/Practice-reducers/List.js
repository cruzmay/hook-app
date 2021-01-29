import React from 'react'
import { Item } from './Item'

export const List = ({todos, handleToogle, handleDelete}) => {
    return (
        <ul
        className="list-group mt-3"
        >   
            {
                todos.map((todo, i) => 
                    <Item
                        todo={todo}
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
