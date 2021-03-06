import React from 'react';
import PropTypes from 'prop-types'
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ categoria }) => {

    const { data:images, loading } = useFetchGifs( categoria );

    return (
        <>
            <h3>{ categoria }</h3>

            {  loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid"> 
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

GifGrid.propTypes = {
    categoria: PropTypes.string,
}

export default GifGrid
