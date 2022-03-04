import React from 'react';

const InputComponent = (props) => {
    // Object Destructuring - ES6
    const{valueText,handleFirstName} = props;
    return(
        <>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control form-control-md'
                    value={valueText}
                    onChange={handleFirstName}
                    placeholder='First Name'
                />
            </div>
        </>
    )

}

export default InputComponent;