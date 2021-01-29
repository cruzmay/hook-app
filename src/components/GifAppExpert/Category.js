import React, { useEffect, useState } from 'react'
import { CategoryItem } from './CategoryItem'
import { useFetch } from './Hooks/useFetch'

export const Category = ({category}) => {

    const { data:images , loading } = useFetch(category)

    return (
        <>
            <h2>{category}</h2>
            <div className="row">
            {
                images.map( i => 
                <CategoryItem
                    key= {i.id}
                    {...i}
                />
                
                )
            }

            </div>
    
        </>
    )
}
