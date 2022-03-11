import React,{useState,useEffect,useContext} from 'react';
import { InputContext } from './App';
import Loader from '../../Loader';
import MeaningList from './MeaningList';
import ExampleList from './ExampleList';
import swal from 'sweetalert';
import axios from 'axios';

const HeaderList = () => {
    // Array Destructuring - ES6
    const [responseData, setResponseData] = useState([]);
    // console.log(responseData);

    const [loading, setLoading] = useState(true);

    const {
        inputValueTwo
    } = useContext(InputContext);

    // Declared & Assigned
    const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

    axios.defaults.baseURL = baseUrl;

    // AJAX Life Cycle
    const fetchData = (params) => {

        // consuming code
        axios
            .get(`/${params}`)

            // success
            .then((response) => {
                const result = response.data;
                // Invoke State functions
                setResponseData(result);
                setLoading(!true);
            })

            // failure
            .catch((error) => {
                swal(error.message)
            })
    }

    const result = () => {
        if (inputValueTwo.length > 0) {
            // Invoke callback function
            fetchData(inputValueTwo);
        }
    }

    // Invoke useEffect Hook
    useEffect(result, [inputValueTwo]);

    const res = (
        <>
            <h3 className='text-capitalize font-weight-bold text-dark'> 
                meaning & definitions:
            </h3>
            <MeaningList
                meaning = {responseData}
            />
            <h3 className='text-capitalize font-weight-bold text-dark'> 
                example:
            </h3>
            <ExampleList
                meaning={responseData}
            />
        </>
    )

    return(
        <section>
            <div className='container'>

                {/* row */}
                <div className='row'>
                    {/* col */}
                    <div className='col-lg-8 mx-auto'>
                        {/* Conditional rendering - ternary operator  */}
                        {
                            (loading) ? <Loader/> : res
                        }
                        
                    </div>
                    {/* end of col */}

                </div>
                {/* end of row */}

            </div>
        </section>
    )
}

export default HeaderList;