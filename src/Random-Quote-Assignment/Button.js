import React from 'react';

const Button = (props) => {
    // Object Destructuring - ES6
    const{btnText,onClickEvent} = props;

    return(
        <div className='d-flex justify-content-center align-items-center my-2'>
            <button 
                className='btn btn-md text-capitalize btn-secondary text-light'
                onClick={onClickEvent}
            >
                {btnText}
            </button>
        </div>
    )
}

export default Button;