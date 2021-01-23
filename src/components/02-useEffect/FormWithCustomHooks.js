import React from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'

export const FormWithCustomHooks = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        password: '',
        email: '',
    })

    const {name, password, email} = formValues

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formValues)
    }
 
    return (
        <form onSubmit={handleSubmit}>
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
            <div className="form-group mt-2">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="correo@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group mt-2">
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
            <button 
                type="submit"
                className="btn btn-primary mt-2"
            >
                ENVIAR
            </button>
        </form>
    )
}
