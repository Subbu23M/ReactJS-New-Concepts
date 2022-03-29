import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Main.scss';

const App = () => {
    // Array Destructuring - ES6
    const[data,setData] = useState([]);

    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    // fetch data
    const fetechData = () => {
        axios
            .get(baseUrl)

            .then((response)=> {
                const result = response.data;
                // console.log(result);
                setData(result);
            })

            .catch((error) => {
                swal(error.message);
            })
    }

    // Invoke useEffect Hook
    useEffect(fetechData,[]);

    return(
        <>
            {
                data.map((post) => {
                    // console.log(post);
                    const{userId,id,title,body} = post;
                    return(
                        <div key={post.id} className='parent'>
                            <h1>
                                User-ID - {userId}
                            </h1>
                            <h2>
                                Id - {id}
                            </h2>
                            <p>
                                {title}
                            </p>
                            <p>
                                {body}
                            </p>
                        </div>
                    )
                })
            }
        </>
    )
}
export default App;