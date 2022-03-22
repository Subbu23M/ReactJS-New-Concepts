import { useState,useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import Listing from "./Components/Listing";
import Loader from '../Loader';
import './Styling/Main.scss';

const App = () => {
    const [recipeData, setRecipeData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [queryRecipe, setQueryRecipe] = useState('banana');
    const[isLoading,setIsLoading] = useState(true);

    const EDAMAM_APP_ID = '3c596a9e'

    const baseURL = `https://api.edamam.com/search?q=${queryRecipe}&app_id=${EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}`;

    const fetchData = () => {
        axios
            .get(baseURL)

            .then((response) => {
                const result = response.data.hits;
                setRecipeData(result);
                setIsLoading(!true);
            })

            .catch((error) => {
                swal(error.message);
            })
    }

    // Invoke useEffect Hook
    useEffect(fetchData, [queryRecipe]);

    // Event Handler as callback function - 1
    const handleInput = (e) => {
        const userInput = e.target.value;

        // Invoke State function
        setInputValue(userInput);
    }

    // Event Handler as callback function - 2
    const handleSearch = (e) => {
        e.preventDefault();

        // Invoke State function
        setQueryRecipe(inputValue);

        // To reset user input
        setInputValue('');
    }

    // Event Handler as callback function - 3
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            // Invoke State function
            setQueryRecipe(inputValue);

            // To reset user input
            setInputValue('');
        }
    }

    return(
        <>
            <form className="text-center">
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
                        type='submit'
                    >
                        <i 
                            className="fa fa-search text-light" 
                            aria-hidden="true"
                        ></i>
                    </button>
                </div>
            </form>
            {
                isLoading ? <Loader/> : <Listing
                data={recipeData}
            />
            }
        </>
    )
}

export default App