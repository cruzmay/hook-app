import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleFocus = () => {
        inputRef.current.select()
        // se puede usar para seleccionar el input
        // document.querySelector('input').select()
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input
                ref = {inputRef}
                className="form-control"
                placeholder="su nombre"
            />
            <button
            className="btn btn-primary mt-4"
            onClick={handleFocus}
            >
                Focus
            </button>
        </div>
    )
}
