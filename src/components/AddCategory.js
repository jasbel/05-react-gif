import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState(" ");

    const handleAdd = (e) => {
        setInputValue(e.target.value);

        console.log("orkinf");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //evitar los vacios
        if (inputValue.trim().length > 2) {
            setCategories((cat) => [inputValue, ...cat]);

            //vaciar input
            setInputValue('');
        }
    };

    return (
        <div>
            <h2> {inputValue} </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleAdd} />
            </form>
            <button onClick={handleSubmit}> Agregar </button>
        </div>
    );
};

// obligar propiedades requeridas
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
