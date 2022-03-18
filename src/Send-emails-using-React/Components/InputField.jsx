import React from 'react';

const InputField = ({
        type,
        label,
        handleChange,
        placeholder,
        name,
        value
    }) => {
    return(
        <div
            className='form-group'
        >
            <label 
                htmlFor={name}
                className='text-light'
            >
                {label}
            </label>
            <input
                type={type}
                className='form-control px-3'
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputField;