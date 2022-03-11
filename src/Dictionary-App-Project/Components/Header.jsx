import React,{useState,useContext} from 'react';
import { InputContext } from './App';

const Header = () => {
    // Array Destructuring - ES6
    const [inputValue, setInputValue] = useState('');

    const {
        inputValueTwo,
        setInputValueTwo
    } = useContext(InputContext);

    // Event Handler as callback function - 1
    const handleInput = (e) => {
        const userInput = e.target.value;

        // Invoke State function
        setInputValue(userInput);
    }

    // Event Handler as callback function - 2
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            // Invoke State function
            setInputValueTwo(inputValue);

            // To reset user input
            setInputValue('');
        }
    }

    // Event Handler as callback function - 3
    const handleSearch = () => {
        // Invoke State function
        setInputValueTwo(inputValue);

        // To reset user input
        setInputValue('');
    }

    return(
        <header className='bg-dark py-3 px-2 text-center my-3 text-light'>
            <h2 
                className='text-capitalize font-weight-bold'
            >
                simple dictionary 
            </h2>
            <p
                className='lead'
            >
                Find definitions for word
            </p>

            <div className='mt-3'>
                <input
                    type='search'
                    placeholder='Search...'
                    className='rounded py-2 px-3'
                    value={inputValue}
                    onChange={handleInput}
                    onKeyDown={handleEnter}
                />

                <button 
                    className='btn btn-one btn-sm bg-primary'
                    onClick={handleSearch}
                >
                    <i 
                        className="fa fa-search text-light" 
                        aria-hidden="true"
                    ></i>
                </button>
            </div>
            {/* Conditional rendering - Simple...if */}
            {
                (inputValueTwo) && <h4 className='text-warning mt-1'> Result for <span className='text-light'>{inputValueTwo}</span> </h4>
            }
        </header>
    )
}

export default Header;