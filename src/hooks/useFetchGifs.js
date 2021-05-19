import { useEffect, useState } from "react"
import { getGif } from '../helpers/getGifs'


export const useFetchGifs = ( series ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( () => {
        getGif( series )
        .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
        } )
    }, [series])

    

    return state
}