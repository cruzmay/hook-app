import React, { useState } from 'react'

export const AddCategory = ({setcategory}) => {

    const [inputValue, setinputValue] = useState([])

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setcategory( c => [inputValue, ...c])
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                className="form-group col-12 mt-3 mb-3"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
