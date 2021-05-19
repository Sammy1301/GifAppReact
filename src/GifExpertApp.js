import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [series, setSeries] = useState(['Demon Slayer']);


    // const handelAdd = () =>{
    //     // setSeries( ['Loki', ...series] );
    //     setSeries( seri => [...seri, 'Loki']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setSeries = { setSeries }/>
            <hr/>

            <ol>
                {
                    series.map( serie => 
                        <GifGrid
                        key = { serie }
                        series = { serie }
                        />
                    )
                }   
            </ol>
        </>
    )
} 
