import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2){
            setCategorias((cat) => [inputValue, ...cat]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                onChange={ handleInputChange }
                placeholder="Buscar Gifs..."
                type="text"
                value={ inputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}

export default AddCategory
