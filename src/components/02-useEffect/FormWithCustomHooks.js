import React, { useState } from 'react'

export const FormWithCustomHooks = () => {

    const [formState, setformState] = useState({
        name: '',
        password: '',
        email: '',
    })

    const {name, password, email} = formState

    const handleInputChange = () => {
        
    }
 
    return (
        <>
            <h1>UseEffect</h1>
            <hr/>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}
