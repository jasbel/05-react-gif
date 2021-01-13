import React, {  useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const {data: images, loading } = useFetchGifs(category);
    console.log(loading);

    // useEffect(() => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ])

    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" > { category } </h3>

            { loading && <p className="animate__animated animate__flash">loading...</p>}

            <div className="card-grid">
                {
                    images.map(gif =>
                        <GifGridItem 
                            key={gif.id}
                            {...gif}
                        />
                        
                    )
                }
            </div>
        </>
    )
}

export default GifGrid
