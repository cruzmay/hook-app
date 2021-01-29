import React from 'react'
import { useForm } from '../../hooks/useForm'

export const Form = ({handleAdd}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault() 
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAdd(newTodo)
        reset()

        
    }

    return (
        <form 
        onSubmit={handleSubmit}
        className="form-group col-12"
        >
            <input
            className="form-group col-9 p-1"
            name="description"
            value={description}
            onChange={handleInputChange}
            />
            <button
            className="btn btn-primary col-2 ms-2"
            >
                Agregar
            </button>
        </form>
    )
}
