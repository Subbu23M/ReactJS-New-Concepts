import React,{useState} from 'react';
import Posts from './Posts';
import './Main.scss';

const SearchBox = (props) => {
    // Array Destructuring - ES6
    // State variable & function
    const[title,setTitle] = useState('');

    // Event Handler as callback function
    const handleSearch = (e) => {
        const inputValue = e.target.value;

        // Invoke State function
        setTitle(inputValue);
    }
    return(
        <>
            <form>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control text-center'
                        placeholder='Search Post By Title'
                        value={title}
                        onChange={handleSearch}
                    />
                </div>
            </form>

            {/* Child Component Instance  */}
            <Posts
                searchInput = {title}
            />
        </>
    )
}
export default SearchBox;