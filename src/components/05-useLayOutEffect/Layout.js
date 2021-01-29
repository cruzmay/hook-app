import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../03-examples/multiple.css'

export const Layout = () => {

    const {counter, increment} = useCounter(1)

    const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
    
    const {quote} = !!data && data[0]

    const pTag = useRef()

    const [layout, setlayout] = useState({})

    useLayoutEffect(()=>{
        setlayout(pTag.current.getBoundingClientRect())
    },[quote])
    
    console.log(quote)
    return (
        <div>
            <h1>LayOutEffect</h1>
            <hr/>
                <blockquote className="blockquote text-right">
                    <p className="mb-3" ref={pTag}>{quote}</p>
                </blockquote>
            <button 
            className="btn btn-primary"
            onClick = {increment}
            >next quote
            </button>
            <pre className="mt-4">
                {JSON.stringify(layout, null, 3)}
            </pre>
        </div>
    )
};