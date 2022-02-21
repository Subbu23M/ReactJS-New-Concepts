import React,{useState} from 'react';
import './Main.scss';
import { dummyData } from './dummyData';

const SearchBox = (props) => {
    // Array Destructuring - ES6
    // State variable & function to make form as controlled elements
    const[title,setTitle] = useState('');

    // Event Handler as callback function
    const handleSearch = (e) => {
        const inputValue = e.target.value;

        // Invoke State function
        setTitle(inputValue);
    }

    // Logic for Search / Filter
    const dataSearch = dummyData.filter((ele)=>{
        // Object Destructuring - ES6
        const{name} = ele;

        // Ternary Operator
        const result = (name.includes(title)) ? name.toLowerCase() : '';
        return result;
    })
    
    return(
        <>
            <form>
                <div className='form-group text-center'>
                    <input
                        type='text'
                        className='form-control-lg text-center'
                        placeholder='Search'
                        value={title}
                        onChange={handleSearch}
                    />
                </div>
            </form>

            {/* Embed Expression */}
            {
                dataSearch.map((ele)=>{
                    // Object Destructuring - ES6
                    const{id,name} = ele;

                    return (
                        <div key={id} className='text-center my-2'>
                            <h4>
                                {name}
                            </h4>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SearchBox;