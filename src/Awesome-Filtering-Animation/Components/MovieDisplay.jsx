const MovieDisplay = ({data}) => {
    return(
        <section className="my-5">
            <div className="container">
                <div className="row">
                    {
                        data.map((movie) => {
                                    const {
                                        title,
                                        id,
                                        backdrop_path
                                    } = movie;
                            return(
                                <div className="col-lg-3 col-sm-6 my-2" key={id}>
                                    <h3>
                                        {title}
                                    </h3>
                                    <img 
                                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`}
                                        alt={title}
                                        className='img-fluid mb-2 img-thumbnail' 
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default MovieDisplay