import React, { useEffect, useReducer } from 'react'
import { GifCategories } from './GifCategories'
import { GifForm } from './GifForm'
import { GifReducers } from './GifReducers'
import './styles.css'

const init = () => {
    return JSON.parse(localStorage.getItem('category')) || []
}

export const GifExpertReducers = () => {

    const [category, dispatch] = useReducer( GifReducers, [], init)

    useEffect(()=>{
        localStorage.setItem('category', JSON.stringify(category))
    },[category] )

    const handleAdd = (newCategory) => {
        dispatch({
            type: 'Addcategory',
            payload: newCategory
        })
    }

    return (
        <div>
            <h1>GifAppExpertApp</h1>
            <GifForm
            handleAdd={handleAdd}
            />
            <hr/>
            {
                category.map( cat =>
                     <GifCategories
                        {...cat}
                        key={cat.id}
                     />
                )
            }
           
        </div>
    )
}
