import React, { memo } from 'react'


export const ShowIncrement = memo(({ increase }) => {

    console.log('me volvi a incrementar =(')

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick = {() => {
                    increase(5);
                }}
            >
                +1
            </button>
        </div>
    )
})
