import React from 'react';

const FormInput = (props) => {
    // Object Destructuring - ES6
    const{placeholder,name,onChange,...otherProps} = props;

    // console.log(props);
    return(
        <>
            <input
                type='text'
                name={name}
                className=' form-control form-control-md'
                placeholder={placeholder}
                onChange={onChange}
                {...otherProps}
            />
        </>
    )
}
export default FormInput;