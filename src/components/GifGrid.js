import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid =  ({ series }) => {


    const { data:images, loading } = useFetchGifs( series );

    
    return (
        <>
            <h3>{ series }</h3>
            { loading && <p>Cargando...</p>}
        <div className = "card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
        </div>

        </>
            )
}
