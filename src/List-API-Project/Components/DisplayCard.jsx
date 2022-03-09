import React from 'react';

const DisplayCard = ({data}) => {
    return(
        <section>
            <div className='container'>
                {/* row */}
                <div className='row'>
                    {
                        Object.keys(data).length > 0 && data.entries.sort().map(((ele, index) => {
                                        // Object Destructuring - ES6
                                        const {
                                            API,
                                            Description,
                                            Auth,
                                            Cors,
                                            Category,
                                            Link
                                        } = ele;

                            return(
                                <div className='col-lg-4' key={index}>
                                    <a href={Link} target="_blank">
                                        <div className='card text-dark my-2 mx-3 p-1'>
                                            <div className='card-body'>
                                                <h3>
                                                    Title : {API}
                                                </h3>

                                                <p className='lead'>
                                                    Description : {Description}
                                                </p>

                                                <h3>
                                                    Auth : { (Auth) ? Auth : <span>-</span>}
                                                </h3>

                                                <h3>
                                                    Cors : {Cors}
                                                </h3>

                                                <h3>
                                                    Category : {Category}
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        }))
                    }
                </div>
                {/* end of row */}
            </div>
        </section>
    )
}
export default DisplayCard;