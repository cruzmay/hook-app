import React from 'react'
import { useForm } from '../../hooks/useForm'

export const GifForm = ({handleAdd}) => {

    const [{ category }, handleInputChange, reset] = useForm({
        category: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('se disparo')

        const newCategory = {
            id: new Date().getTime(),
            category: category
        }

        handleAdd(newCategory)
        reset()
    }
    

    return (
        <form
        onSubmit={handleSubmit}
        className="col-12"
        >
            <input
            type="text"
            name="category"
            value={category}
            className="col-12"
            onChange={handleInputChange}
            />
        </form>
    )
}
