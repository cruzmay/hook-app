import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddToDo }) => {
    
    const [{description}, handleInputChange, reset] = useForm({description: ''})

    const handleSubmit = (e) => {
        e.preventDefault()

        if(description.trim().length <= 1){
            return
        }

        const newTodo = {
            id : new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddToDo(newTodo)
        reset()

    }

    return (
        <>
            <h3>Agregar</h3>
            <form 
                onSubmit={handleSubmit}
                className="form-group col-12 m-4 d-flex justify-content-center"
            >
                <input
                    className="col-9"
                    type="test"
                    name="description"
                    placeholder="aprender"
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary col-3 ms-4"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
