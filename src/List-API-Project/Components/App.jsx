import React,{useEffect} from 'react';
import '../Styling/Main.scss';
import Jumbotron from '../Components/Jumbotron';
import ButtonFilter from './ButtonFilter';
import ListApi from './ListApi';
import { useAxios } from './hooks/useAxios';

const App = () => {
    // Object Destructuring - ES6
    const {
        fetchData,
        data
    } = useAxios('entries');

    // Invoke useEffect hook
    const responseData = () => {
        fetchData({
            params: {
                category: 'Animals'
            }
        });
    }

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