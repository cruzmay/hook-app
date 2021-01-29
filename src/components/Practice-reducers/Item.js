import React from 'react'

export const Item = ({todo, index, handleDelete, handleToogle}) => {
    return (
            <li
            className="list-group-item d-flex justify-content-between align-items-center"
            >
                <p 
                className={`m-0 task ${todo.done && 'marked'}`}
                onClick={()=> handleToogle(todo.id)}
                >
                {index + 1}. {todo.desc}
                </p>
                <button
                className="btn btn-danger"
                onClick={()=> handleDelete(todo.id)}
                >
                    Borrar
                </button>
            </li>
         )
    }
