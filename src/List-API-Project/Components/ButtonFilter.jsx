import React,{useEffect} from 'react';
import { useAxios } from './hooks/useAxios';

const ButtonFilter = ({fetchData:fetchApi}) => {
    // Object Destructuring - ES6
    const {
        fetchData,
        data: {
            categories
        }
    } = useAxios('categories');

    const responseData = () => {
        fetchData();
    }
    
    // Invoke useEffect hook
    useEffect(responseData, []);

    // Event Handler as callback function
    const handleButtonSearch = (e) => {
        // Invoke callback function
        fetchApi({
            params: {
                category: e.target.value
            }
        })
    }

    return(
        <>
            {/* Simple...if - Conditional Statement */}
            {
                (
                    categories && categories.map((ele,index) => {
                        return(
                            <button 
                                key={index}
                                className='btn one btn-secondary text-warning m-2 btn-lg'
                                onClick={handleButtonSearch}
                                value={ele}
                            >
                                {ele}
                            </button>
                        )
                    })
                )
            }
        </>
    )
}

export default ButtonFilter;