import React,{useEffect} from 'react';
import Jumbotron from '../Components/Jumbotron';
import ButtonFilter from './ButtonFilter';
import ListApi from './ListApi';
import { useAxios } from './hooks/useAxios';
import '../Styling/Main.scss';

const App = () => {
    // Object Destructuring - ES6
    const {
        fetchData,
        data
    } = useAxios('entries');

    const responseData = () => {
        // Invoke callback function
        fetchData({
            params: {
                category: 'Animals'
            }
        });
    }
    
    // Invoke useEffect hook
    useEffect(responseData,[]);

    return(
        <>
            {/* Child Component Instance */}
            <Jumbotron
                fetchData = {fetchData}
            />

            <section className='mt-2'>
                <div className='container'>
                    {/* row */}
                    <div className='row'>
                        {/* col-1 */}
                        <div className='col-lg-8 mx-auto'>
                            <ButtonFilter
                                fetchData = {fetchData}
                            />
                        </div>
                        {/* end of col-1 */}
                    </div>
                    {/* end of row */}
                </div>
            </section>

            <ListApi
                dataOne={data}
            />
        </>
    )
}
export default App;