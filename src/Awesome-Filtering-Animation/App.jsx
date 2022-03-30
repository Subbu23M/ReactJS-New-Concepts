import {useState,useEffect} from 'react';
import './Styling/Main.scss';
import axios from 'axios';
import swal from 'sweetalert';
import MovieDisplay from './Components/MovieDisplay';
import FilterButtons from './Components/FilterButtons';

const App = () => {
    const [movieData, setMovieData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [genreIds, setGenreIds] = useState(0);

    const fetchData = () => {
        const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;

        axios
            .get(baseURL)

            .then((response) => {
                const result = response.data;
                // console.log(result);
                // Invoke state functions
                setMovieData(result.results);
                setFilterData(result.results);
            })

            .catch((error) => {
                swal(error.message);
            })
    }

    // Invoke useEffect hook
    useEffect(fetchData, []);

    return(
        <>
            <FilterButtons
                movieData={movieData}
                setFilterData={setFilterData}
                setGenreIds={setGenreIds}
                genreIds={genreIds}
            />
            <MovieDisplay
                data={filterData}
            />
        </>
    )
}

export default App;