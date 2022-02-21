import React from 'react';
import SearchBox from './SearchBox';

const App = () => {
    return(
        <section>
            <div className='container'>

                {/* row */}
                <div className='row'>

                    {/* col-1 */}
                    <div className='col-lg-5 mx-auto bg-dark my-5 p-5'>
                        <SearchBox/>
                    </div>
                    {/* end of col-1 */}

                </div>
                {/* end of row */}

            </div>
        </section>
    )
}

export default App;