import { useEffect } from "react";

const FilterButtons = ({movieData,setFilterData,setGenreIds,genreIds}) => {
    const filterResult = () => {
        if (genreIds === 0) {
            setFilterData(movieData)
            return;
        }
        const filterData = movieData.filter((movie) => {
            return movie.genre_ids.includes(genreIds);
        })
        setFilterData(filterData);
    }

    useEffect(filterResult, [genreIds]);

    return(
        <div
            className="d-flex justify-content-around align-items-center my-5"
        >
            <button
                className="btn btn-outline-primary"
                onClick={()=>setGenreIds(0)}
            >
                All 
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={()=>setGenreIds(35)}
            >
                Comedy 
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={()=>setGenreIds(28)}
            >
                Action 
            </button>
        </div>
    )
}

export default FilterButtons;