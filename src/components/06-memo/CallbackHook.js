import React, { useState, useCallback, useEffect } from 'react';
import '../03-examples/multiple.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setcounter] = useState(10)

    // const increase = () => {
    //     setcounter(counter + 1)
    // }

    const increase = useCallback((num) => {
        setcounter( c => c + num )
    },[setcounter])  

    useEffect(() => {
        
    } )

    return (
        <div>
            <h1>useCallback hook</h1>
            <hr/>
            <h2>Counter: {counter}</h2>
            <ShowIncrement increase = {increase}/>
        </div>
    )
}
