import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {

    
    const [counter, setcounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    })

    const {counter1, counter2} = counter

    const handleCounter = () => {
        setcounter({
            ...counter,
            counter1: counter1 + 1
            
        })
    }

    return (
        <>
          <h1>Counter1 { counter1 }</h1>
          <h1>Counter2 { counter2 }</h1>
          <hr/> 
          <button 
          className="btn btn-primary"
          onClick={handleCounter}
          >
              +1
          </button>
        </>
    )
}

export default CounterApp
