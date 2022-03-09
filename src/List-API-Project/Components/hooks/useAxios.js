import axios from "axios";
import { useState } from "react";

// Helper function
export const useAxios = (query) => {
    // Array Destructuring - ES6
    const[data,setData] = useState({});
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);

    // Extracting Data from API
    const fetchData = async (params) => {
        try{
            // Invoke State function
            setLoading(true);
            const responseData = await axios.get(`https://api.publicapis.org/${query}`,params);
            setData(responseData.data);
        } catch(error){
            setError(error)
        } finally{
            setLoading(false);
        }
    }
    return(
        {
            fetchData : (params) => fetchData(params),

            // ES6 Concise Property
            data,
            loading,
            error
        }
    )
}