import React from 'react'
import {useCounter} from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();
    return (
        <>
           <h1>Counter With hooks: {state}</h1>
           <hr/>
           <button onClick={()=>increment(1)} className="btn btn-primary m-2">+1</button>
           <button onClick={()=>reset()} className="btn btn-primary m-2">reset</button>
           <button onClick={()=>decrement(1)} className="btn btn-primary m-2">-1</button>
        </>
    )
}
