import React,{useState} from 'react';
import IconWithText from './IconWithText';
import FormInput from './FormInput';

const App = () => {
    // Array Destructuring - ES6
    const [userInputs, setUserInputs] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    })

    const inputSkeleton = [{
        type: 'text',
        placeholder: 'First Name',
        name: 'firstName',
    }, {
        type: 'text',
        placeholder: 'Last Name',
        name: 'lastName',
    }, {
        type: 'text',
        placeholder: 'Email Address',
        name: 'emailAddress',
    }, {
        type: 'text',
        placeholder: 'Password',
        name: 'password',

    }, ];

    // Event Handler as callback function
    const handleChange = (e) => {
        // Invoke State function
        setUserInputs({
            ...userInputs,
            [e.target.name]: e.target.value
        })
    }

    // Event Handler as callback function
    const handleSubmit = (e) => {
        // Stop browser to reload
        e.preventDefault();

        const userDetails = {
            firstName:userInputs.firstName,
            lastName:userInputs.lastName,
            emailAddress:userInputs.emailAddress,
            password:userInputs.password
        }
        console.log(userDetails);

        // To reset input fields
        // Invoke State function
        setUserInputs({
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: ''
        });
    }

    return <>
        <IconWithText/>

        <form className='p-2 bg-warning' autoComplete='off'>
            {/* row */}
            <div className='form-row'>
                {
                    inputSkeleton.map((ele,index)=>{
                        return(
                            <div className='col-lg-6 my-2' key={index}>
                                <FormInput
                                    value={userInputs[ele.name]}
                                    {...ele}
                                    onChange={handleChange}
                                />
                            </div>
                        )
                    })
                }
            </div>
            {/* end of row */}
        </form>
        <button
            className='btn btn-outline-secondary text-dark btn-lg mx-2 my-2 text-capitalize'
            onClick={handleSubmit}
        >
            submit
        </button>    
    </>
};
export default App;