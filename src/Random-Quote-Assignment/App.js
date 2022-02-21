import React from 'react';
import DisplayQuote from './DisplayQuote';

const App = () => {
    return(
        <section>
            <div className='container'>
                {/* row */}
                <div className='row'>
                    {/* col */}
                    <div className='col-lg-5 mx-auto bg-dark p-5 my-5'>
                        <h2 className='text-capitalize text-center text-light font-weight-bold'>
                            panna quote machine
                        </h2>
                        {/* Child Component Instance */}
                        <DisplayQuote/>
                    </div>
                    {/* end of col */}
                </div>
                {/* end of row */}
            </div>
        </section>
    )
}
export default App;