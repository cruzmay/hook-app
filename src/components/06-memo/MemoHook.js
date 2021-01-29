import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../03-examples/multiple.css'

export const MemoHook = () => {
    
    const {counter, increment} = useCounter(5000)
    const [show, setshow] = useState(true)


    // const procesoPesado = ( iteraciones ) => {
    //     for(let i = 0; i = iteraciones; i++) {
    //         console.log('ahi vamos...')
    //     }
    //     return `${iteraciones} iteraciones realizadas`
    // }
 
    // const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <hr/>
            <h2> counter : <small>{counter}</small> </h2>
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button 
                className="btn btn-outline-primary m-4"
                onClick={() => {
                    setshow(!show)
                }}
                >
                    
                show/hide {JSON.stringify(show)}
            </button>
            {/* <p>{memoProcesoPesado}</p> */}
        </div>
    )
}
