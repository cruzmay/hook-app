import React from 'react'

export const CategoryItem = ({id, title, url}) => {
    return (
        <figure className="col-4">
            <img 
                src={url}
                alt={title}
            />
            <p>{title}</p>
        </figure>
    )
}
