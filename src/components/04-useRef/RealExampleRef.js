import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import '../02-useEffect/effects.css'

export const RealExampleRef = () => {
    
    const [show, setshow] = useState(false)

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            {
                show && <MultipleCustomHooks/>
            }
            <button 
                className={!show ? 'btn btn-primary' : 'btn btn-danger'}
                onClick = {()=>{
                    setshow(!show)
                }}
            >
                {
                    !show ? 'Show' : 'Hide'
                }
            </button>
            
        </div>
    )
}
