import React from 'react'

export const GifCategoryItem = ({id, url, title}) => {
    return (
        <>
          <figure>
            <img src={url} alt={title}/>
          <p>{title}</p>
          </figure>
        </>
    )
}
