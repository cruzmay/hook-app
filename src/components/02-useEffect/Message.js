import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setcoords] = useState({
       x:0,
       y:0 
    })

    const { x , y } = coords
    // forma como se usa un cleanup
    useEffect(() => {
            const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y}
            setcoords(coords);  
            // console.log({ x: e.x, y: e.y})  
            }
            window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h1>Eres genial!</h1>
            <p>
               x: {x} y:{y}
            </p>
        </div>
    )
}
