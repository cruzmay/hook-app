import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setuser } = useContext(UserContext)
    const newUser = {
        name: 'Pedro',
        password: 1234,
        email: 'pcruzmay@gmail.com',
        id: new Date().getTime()
    }

    return (
        <>
            <h1>Login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={()=>setuser(newUser)}
            >
                LOGIN
            </button>
        </>
    )
}
