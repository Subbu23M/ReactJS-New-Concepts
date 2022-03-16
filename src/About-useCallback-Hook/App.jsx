import React,{useState,useCallback} from 'react';

const App = () => {
    // Array Destructuring - ES6
    const[initialValue,setInitialValue] = useState(0);

    const incrementLogic = () => {
        // Invoke State function
        setInitialValue(initialValue +1);
    }

    // Invoke callback hook
    const handleIncrement = useCallback(incrementLogic,[initialValue]);

    return(
        <>
            <h1>
                When to use the useCallback hook? 
            </h1>
            <p className='lead'>
                In JavaScript, we know that when a function gets executed we know that each and every thing (variables functions, objects etc) that is present within the function gets re-created into the memory. So this happens on each execution of the function. Now for a function we might not want it to get re-created on each re-render of the component and in turn we may want to use the exact same instance for that specific function in each of our renders. We might only want to re-create the function when a specific dependency which that function uses gets changed and NOT otherwise. This is something that we can achieve by making use of the useCallback hook. 
            </p>
            <h2>
                Counter : {initialValue}
            </h2>
            <button
                onClick={handleIncrement}
            >
                Increment
            </button>
        </>
    )
}

export default App;