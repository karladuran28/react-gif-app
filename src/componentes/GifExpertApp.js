import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

/* test comment */

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Techno']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr />

            <ol>
                {
                    categorias.map( categoria => (
                        <GifGrid
                            key={ categoria }
                            categoria={ categoria } 
                        /> 
                    ))
                }
            </ol>
        </>
    )
};

export default GifExpertApp
