import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Button from './Button';
import swal from 'sweetalert';
import Loader from '../Loader';

const DisplayQuote = (props) => {
    // State variable & function
    const[quotesData,setQuotesData] = useState([]);

    const[quote,setQuote] = useState('');
    const[author,setAuthor] = useState('');

    const[hexColor,setHexColor] = useState('');
    const[loading,setIsLoading] = useState(true);

    // Declared & Assigned
    const baseUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    // AJAX Life Cycle
    const fetchData = () => {
        axios
            .get(baseUrl)

            // success
            .then((response) => {
                const result = response.data.quotes;
                // console.log(result);

                // Invoke State function
                setQuotesData(result);
                setIsLoading(!true);
            })

            // failure
            .catch((error) => {
                swal(error.message);
            })
    }

    //Invoke useEffect hook
    useEffect(fetchData,[]); 
    
    // Event Handler as callback function
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * quotesData.length);

        const randomQuote = quotesData[randomIndex]; 
        // console.log(randomQuote);
        
        // Invoke state function
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);

        // Declared & Assigned
        const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

        // Logic to frame colors
        const hexCol = () => {
            // Declared & Assigned
            let hexSymbol = "#";

            for (let i = 0; i < 6; i++) {
                const randomNumber = Math.floor(Math.random() * hexValues.length);

                // reassigned
                hexSymbol = hexSymbol + hexValues[randomNumber];
                // console.log(hexSymbol);

                // Invoke state function
                setHexColor(hexSymbol);
            }
        }
        // Invoke function
        hexCol();
    }

    const bgColor = {
        backgroundColor:hexColor
    }

    const result = (
        <div className='card-body' style={bgColor}>

            <blockquote className='blockquote text-light'>
                <p className='lead font-weight-bold mb-0'>
                    {quote}
                </p>
                <footer className='blockquote-author text-right'>
                    {author}
                </footer>
            </blockquote>
                
            {/* Child Component Instance */}
            <Button
                btnText='new quote'
                onClickEvent = {handleClick}
            />
        </div>
    )
    
    return(
        <div className='card border border-dark my-3'>

            {/* Conditional Rendering - Ternary Operator */}
            {/* Child Component Instance */}
            {
                (loading) ? <Loader/> : result
            }
            
        </div>
    )
}

export default DisplayQuote;