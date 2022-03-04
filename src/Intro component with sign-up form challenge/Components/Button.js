import React from 'react';

const Button = (props) => {
    // Object Destructuring - ES6
    const{textOne,textTwo,className,textThree} = props;

    return(
        <>
            <button
                className={className}
            >
                <span className='text-light font-weight-bold'>{textOne}</span> <span className='btnOneColor'>{textTwo}</span> {textThree}
            </button>
        </>
    )
}
export default Button;