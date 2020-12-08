import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState(' ')

    const handleAdd = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //evitar los vacios
        if (inputValue.trim().length > 2) {
            setCategories(cat => [...cat, inputValue]);
            setInputValue(' ');
        }

    }

    return (
        <div>
            <h2> {inputValue} </h2>
            <form onSubmit = { handleSubmit } >
                <input 
                    type="text"
                    value = { inputValue}
                    onChange={handleAdd}
                    
                />
            </form>
            <button
                onClick = {handleSubmit}
            > Agregar </button>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory