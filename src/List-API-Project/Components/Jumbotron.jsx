import React from 'react';
import SearchBox from './SearchBox';

const Jumbotron = ({fetchData}) => {
    return(
        <div className='main text-center'>
            <h3 className='text-light font-weight-bold'>
                Search APIs
            </h3>

            {/* Child Component Instance */}
            <SearchBox
                fetchData = {fetchData}
            />
        </div>
    )
}
export default Jumbotron;