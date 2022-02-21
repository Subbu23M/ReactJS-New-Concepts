import React,{useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import PostsDataMap from './PostsDataMap';
import Loader from '../Loader';

const Posts = (props) => {
    // Array Destructuring - ES6
    // State variable & function
    const[postsData,setPostsData] = useState([]);
    const[loading,setIsLoading] = useState(true);

    // Object Destructuring - ES6
    const{searchInput} = props;

    // Logic for Search / filter
    const postSearch = postsData.filter((post)=>{
        // Object Destructuring - ES6
        const{title} = post;

        // Ternary Operator
        const result = (title.includes(searchInput)) ? title.toLowerCase() : '';
        return result;
    })

    // Declared & Assigned
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    // AJAX Life Cycle
    const fetchData = () => {
        axios
            .get(baseUrl)

            // success
            .then((response) => {
                const result = response.data;
                // console.log(result);

                // Update Data to State variable
                setPostsData(result);

                setIsLoading(!true);
            })

            // failure
            .catch((error) => {
                swal(error.message);
            })
    }

    // Invoke useEffect Hook
    useEffect(fetchData,[]);

    return (
        <>
            {/* Conditional Rendering - Ternary Operator */}
            {/* Child Component Instance */}
            {
                (loading) ? <Loader/> : <PostsDataMap data = {postSearch}/>
            }
        </>
    )
}
export default Posts;