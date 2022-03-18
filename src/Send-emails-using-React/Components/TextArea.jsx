import React from 'react';

const TextArea = ({
        label,
        name,
        value,
        handleChange
    }) => {
    return(
        <div className='form-group'>
            <label htmlFor={name} className='text-light mt-2'>
                {label}
            </label>
            <textarea
                className='form-control'
                rows='3'
                name={name}
                value={value}
                onChange={handleChange}
            >
            </textarea>
        </div>
    )
}

export default TextArea;