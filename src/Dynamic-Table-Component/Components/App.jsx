import React,{useState,useEffect} from 'react';
import Table from './Table';
import axios from 'axios';
import swal from 'sweetalert';
import '../Styling/Main.scss';

const App = () => {
    // Array Destructuring - ES6
    const [tableData, setTableData] = useState([]);

    // AJAX Life Cycle
    const fetchData = () => {
        // Declared & Assigned
        const baseUrl = 'https://jsonplaceholder.typicode.com/users';

        // consuming code
        axios
            .get(baseUrl)

            // success
            .then((response) => {
                const result = response.data;

                // Invoke State function
                setTableData(result);
            })

            // failure
            .catch((error) => {
                swal(error.message);
            })
    }

    // Invoke useEffect Hook
    useEffect(fetchData, []);

    const columns = [{
            heading: 'Name',
            value: 'name'
        },
        {
            heading: 'Email',
            value: 'email'
        },
        {
            heading: 'Phone',
            value: 'phone'
        },
        {
            heading: 'City',
            value: 'address.city'
        }
    ];

    return(
        <>
            <h1 className='text-center mt-2 text-dark'>
                Dynamic Table
            </h1>
            <div className='underline mx-auto bg-warning mb-0'></div>

            {/* Child Component Instance */}
            <Table
                data={tableData}
                columns={columns}
            />
        </>
    )
}
export default App;