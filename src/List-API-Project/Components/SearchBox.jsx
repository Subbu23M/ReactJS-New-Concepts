import React,{useState} from 'react';

const SearchBox = ({fetchData}) => {
    // Array Destructuring - ES6
    const [userInput, setUserInput] = useState('');

    // Event Handler as callback function - 1
    const handleUserInput = (e) => {
        const inputValue = e.target.value;

        // Invoke State function
        setUserInput(inputValue);
    }

    // Event Handler as callback function - 2
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            // Invoke callback function
            fetchData({
                params: {
                    title: userInput
                }
            });

            // To clear user input
            setUserInput('');
        }
    }

    // Event Handler as callback function - 3
    const handleSearch = () => {
        if (userInput.length > 0) {
            // Invoke callback function
            fetchData({
                params: {
                    title: userInput
                }
            });

            // To clear user input
            setUserInput('');
        }
    }

    return(
        <div className='d-flex justify-content-center mt-3 align-items-center'>
            <input
                type='search'
                className='rounded px-4 py-2 text-dark'
                placeholder='Random fact of dogs'
                value={userInput}
                onChange={handleUserInput}
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
    )
}
export default SearchBox;