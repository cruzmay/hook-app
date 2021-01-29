import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../03-examples/multiple.css'
import { Small } from './Small'

export const Memorize = () => {
    
    const {counter, increment} = useCounter(10)
    const [show, setshow] = useState(true)
    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
            <h2> counter : <Small value={counter}/></h2>
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button 
                className="btn btn-outline-primary ml-4"
                onClick={() => {
                    setshow(!show)
                }}
                >
                    
                show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
