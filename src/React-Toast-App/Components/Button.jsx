import React from 'react';

const Button = ({text,handleClickToast}) => {
    return(
        <>
            <button 
                className='btn btn-secondary m-2 text-uppercase'
                onClick={handleClickToast}
            >
                {text}
            </button>
        </>
    )
}

export default Button;