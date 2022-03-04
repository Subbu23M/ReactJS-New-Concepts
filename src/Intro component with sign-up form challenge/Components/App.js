import React from 'react';
import TextCol from './TextCol';
import FormCol from './FormCol';
import './Main.scss';

const App = (props) => {
    return(
        <section>
            <div className='container'>

                {/* row */}
                <div className='row'>

                    {/* col-1 */}
                    <div className='col-lg-6 textCol col-sm-6'>
                        <TextCol/>
                    </div>
                    {/* end of col-1 */}

                    {/* col-2 */}
                    <div className='col-lg-6 col-sm-6'>
                        <FormCol/>
                    </div>
                    {/* end of col-2 */}

                </div>
                {/* end of row */}
            </div>
        </section>
    )
}
export default App;