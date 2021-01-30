import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const {user, setuser} = useContext(UserContext)
    const handelClick = () => {
        setuser({})
    }
    return (
        <>
            <h1>About</h1>
            <hr/>
            <pre>
                {
                    JSON.stringify(user, null, 4)
                }
            </pre>
            <button
                className="btn btn-warning"
                onClick={handelClick}
            >
                logout     
            </button>
        </>
    )
}
