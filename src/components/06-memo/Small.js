import React, { memo } from 'react'

export const Small = memo (({value}) => {
    console.log('Me volvi a mostar =(')
    return (
        <small>{ value }</small>
    )
})
