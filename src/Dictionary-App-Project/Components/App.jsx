import React,{useState,createContext} from 'react';
import Header from './Header';
import HeaderList from './HeaderList';
import '../Styling/Main.scss';

// Invoke createContext hook
export const InputContext = createContext();

const App = () => {
    // Array Destructuring - ES6
    const [inputValueTwo, setInputValueTwo] = useState('');
    // console.log(inputValueTwo);

    const valueObject = {
        // ES6 Concise Property
        inputValueTwo,
        setInputValueTwo
    }

    return(
        <>
            <h2 className='text-center text-secondary mb-0'>
                Dictionary-App
            </h2>
            <div className='underline mx-auto bg-danger'>
            </div>

            {/* Child Component Instance */}
            <InputContext.Provider value={valueObject}>
                <Header/>
                <HeaderList/>
            </InputContext.Provider>
        </>
    )
}

export default App;