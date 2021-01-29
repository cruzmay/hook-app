import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './multiple.css'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)

    const {loading, data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
    
    const {author, quote} = !!data && data[0]
    
    console.log(author, quote)
    return (
        <div>
            <h1>Breaking Bad quotes</h1>
            <hr/>
            {
                loading ?
                (
                    <div className="alert alert-info text-center">
                        loading ...
                    </div>
                ):
                (
                    <div className="blockquote text-right">
                        <p className="mb-3">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </div>
                )

                
            }
            <button 
            className="btn btn-primary"
            onClick = {increment}
            >next quote
            </button>
        </div>
    )
}
