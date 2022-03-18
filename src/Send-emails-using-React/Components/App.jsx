import React from 'react';
import ContactForm from './ContactForm';
import '../Styling/Main.scss';

const App = () => {
    return(
        <section className='main'>
            <div className='container'>
                {/* row */}
                <div className="row">
                    {/* col-1 */}
                    <div className="col-lg-6 col-sm-6 left">
                        <h1
                            className='text-capitalize text-muted font-weight-bold'
                        >
                            contact us 
                        </h1>
                        <p
                            className='lead ml-2'
                        >
                            let's talk about you
                        </p>
                        
                    </div>
                    {/* end of col-1 */}

                    {/* col-2 */}
                    <div className="col-lg-6 col-sm-6 my-2">
                        <ContactForm/>
                    </div>
                    {/* end of col-2 */}
                </div>
                {/* end of row */}
            </div>
        </section>
    )
}

export default App;