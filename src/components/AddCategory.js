import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ( {setSeries} ) =>{

    const [InputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(InputValue.trim().length > 2){
            setSeries( seri => [InputValue, ...seri ]);
            setInputValue('');
        }
    }

    return(
            <form onSubmit = { handleSubmit }>
                <input 
                    type = 'text'
                    value = {InputValue}
                    onChange = { handleInput }
                />
            </form>
    )
} 

AddCategory.propTypes ={
    setSeries: PropTypes.func.isRequired
}