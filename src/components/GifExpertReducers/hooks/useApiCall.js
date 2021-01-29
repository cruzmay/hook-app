import { useEffect, useState } from "react"
import { ApiCall } from "../helpers/ApiCall"

export const useApiCall = (category) => {
   
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{
        ApiCall(category).then( img => 
            setstate({
                data: img,
                loading: false
            })
        )
    },[category])

    return state

}
