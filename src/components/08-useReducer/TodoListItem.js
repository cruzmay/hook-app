import React from 'react'

export const TodoListItem = ({id, desc, done, handleDelete, handleToogle, index}) => {
    return (
        <li 
        
        className="list-group-item col-12 d-flex justify-content-between align-items-center"
        >
            <p 
                className={`col-4 m-0 task ${ done && 'tacha'} `}
                onClick={()=>handleToogle(id)}
            >
            {index + 1}.- {desc}
            </p>
            <button 
                className="btn btn-small btn-danger"
                onClick={() => handleDelete(id)}
            >
                Borrar
            </button>
        </li>
    )
}
