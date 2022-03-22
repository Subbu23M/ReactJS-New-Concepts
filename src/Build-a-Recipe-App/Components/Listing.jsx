const Listing = ({data}) => {
    return(
        <section>
            <div className="container">
                <div className="row">
                    {
                        data.map((ele,index)=> {
                            // Object Destructuring - ES6
                            const{label,image,calories,ingredientLines} = ele.recipe;

                            return(
                                <div className="col-lg-4 mt-2 mx-auto" key={index}>
                                    <img
                                        src={image}
                                        alt={label}
                                        className='img-fluid img-thumbnail'
                                    />
                                    <h3 className="text-warning text-center">
                                        {label}
                                    </h3>
                                    <h4 className="text-secondary">
                                        Calories - {calories}
                                    </h4>
                                    <h3 className="text-success">
                                        Ingredients
                                    </h3>
                                    <ol>
                                        {
                                            ingredientLines.map((ele,index)=> {
                                                return(
                                                    <li key={index}>
                                                        {ele}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ol>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </section>
    )
}

export default Listing