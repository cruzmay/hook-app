import React from 'react'
import { GifCategoryItem } from './GifCategoryItem'
import { useApiCall } from './hooks/useApiCall'

export const GifCategories = ({category}) => {

    const {data:state, loading} = useApiCall(category)

    return (
        <>
            <h3>{category}</h3>
            {
                loading &&  <p> loading ...</p>
            }
            {
                state.map( img => 
                    <GifCategoryItem
                        {...img}
                        key={img.id}
                    />
                )
            }

        </>
    )
}
