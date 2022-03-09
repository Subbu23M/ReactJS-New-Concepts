import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

// Helper function
export const useAxios = (query) => {
    // Array Destructuring - ES6
    const [data, setData] = useState({});

    // Extracting Data from API
    const fetchData = (params) => {
        axios
            .get(`https://api.publicapis.org/${query}`, params)

            // success
            .then((response) => {
                const result = response.data;
                setData(result);
            })

            // failure
            .catch((error) => {
                swal(error.message);
            })
    }
    return(
        {
            fetchData : (params) => fetchData(params),

            // ES6 Concise Property
            data
        }
    )
}