import React from 'react';

const SelectField = ({
        label,
        handleChange,
        name
    }) => {

    return(
        <>
            <label htmlFor={name} className='text-light'>
                {label}
            </label>
            <select
                className='form-control'
                name={name}
                onChange={handleChange}
                defaultValue='selectOption'
            >
                <option
                    value='selectOption'
                    disabled
                >
                    Choose Job Role
                </option>

                <option
                    value='frontEnd'
                >
                    FrontEnd Developer
                </option>

                <option
                    value='backEnd'
                >
                    BackEnd Developer
                </option>

                <option
                    value='fullStack'
                >
                    FullStack Developer
                </option>
            </select>
        </>
    )
}

export default SelectField;