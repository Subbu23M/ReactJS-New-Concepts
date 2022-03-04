import React,{useState} from 'react';
import Button from './Button';

const FormCol = (props) => {
    const data = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    }

    // Object Destructuring - ES6
    const [userDetails, setUserDetails] = useState(data);
    // console.log(userDetails);

    // Event Handler as callback function
    const handleUserData = (e) => {
        const userInput = e.target.value;
        // console.log(userInput);

        // Invoke State function
        setUserDetails(userInput);
    }
    
    return(
        <>
            <Button
                textOne = 'Try it free 7 days'
                textTwo = 'then $20/mo. thereafter'
                className='btn btnColor btn-lg' 
            />

            <div className='card'>
                <form>
                    {/* 1 */}
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='First Name'
                            value={userDetails.firstName}
                            onChange={handleUserData}
                            className='form-control form-control-md'
                        />
                    </div>

                    {/* 2 */}
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Last Name'
                            value={userDetails.firstName}
                            onChange={handleUserData}
                            className='form-control form-control-md'
                        />
                    </div>

                    {/* 3 */}
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Email Address'
                            value={userDetails.firstName}
                            onChange={handleUserData}
                            className='form-control form-control-md'
                        />
                    </div>

                    {/* 4 */}
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Password'
                            value={userDetails.firstName}
                            onChange={handleUserData}
                            className='form-control form-control-md'
                        />
                    </div>

                    <Button
                        textThree = 'Claim your free trial'
                        className='btn btnColorTwo btn-lg' 
                    />
                </form>
            </div>
        </>
    )
}
export default FormCol;