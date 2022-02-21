import React from 'react';
import SearchBox from './SearchBox';

const App = () => {
    return(
        <>
            <p className='lead text-capitalize my-2 text-center text-warning'>
                search functionality uses filter and map methods 
            </p>
            {/* Child Component Instance */}
            <SearchBox/>
        </>
    )
}

export default App;