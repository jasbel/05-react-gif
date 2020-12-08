import React from 'react'

const GifGrid = ({ category }) => {

    //usando la api de giphy
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=XyiNnwGMpqYVMgHjojGHlfn51EuC5Wqn';

        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);

    }

    getGifs();

    return (
        <div>
            <h3 > { category } </h3>
        </div>
    )
}

export default GifGrid
