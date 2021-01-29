import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { Category } from './Category'
import './GifAppExpert.css'

export const GifAppExpert = ({initialState}) => {

    const [category, setcategory] = useState([initialState])

    return (
        <div>
            <h1>GifAppExpertApp</h1>
                <AddCategory setcategory={setcategory} />
            <hr/>
            {
                category.map(cat =>
                <Category 
                    key={cat}
                    category={cat} />
                )
            }
            
        </div>
    )
}
