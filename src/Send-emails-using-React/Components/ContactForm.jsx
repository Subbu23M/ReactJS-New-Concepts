import React,{useState} from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import TextArea from './TextArea';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const ContactForm = () => {
    const [userInput, setUserInput] = useState({
        fullName: '',
        emailId: '',
        selectOption: '',
        textMessage: ''
    })
    // console.log(userInput);

    // Event Handler as callback function
    const handleChange = (e) => {
        setUserInput((userInput) => ({
            ...userInput,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Syntax : emailjs.send(serviceID, templateID, templateParams, userID);
        emailjs.send('service_3s9tvx5', 'template_a3523sl', userInput, 'uJv0OI8dMBYRPmXKc')
            .then((result) => {
                // console.log(result.text);
                swal('data sent successfully');
                setUserInput({
                    fullName: '',
                    emailId: '',
                    selectOption: '',
                    textMessage: ''
                })
            }, (error) => {
                swal(error.text);
            });
    }

    return(
        <div className='right'>
            
            <div className="card rounded p-3">
                <h2
                    className='text-warning'
                >
                    Send a message
                </h2>
                <div className="card-body bg-success">
                    <form autoComplete='off'>
                        <InputField
                            label='Full Name'
                            type='text'
                            name='fullName'
                            value={userInput.fullName}
                            handleChange={handleChange}
                            placeholder='Bob Ziroll'
                        />
                        <InputField
                            label='Email'
                            type='email'
                            name='emailId'
                            value={userInput.emailId}
                            handleChange={handleChange}
                            placeholder='bob[z]@gmail.com'
                        />
                        <SelectField
                            label='Role'
                            name='selectOption'
                            value={userInput.selectOption}
                            handleChange={handleChange}
                        />
                        <TextArea
                            label='Enter Your Message'
                            name='textMessage'
                            value={userInput.textMessage}
                            handleChange={handleChange}
                        />
                        <button
                            className='btn btn-dark'
                            onClick={handleSubmit}
                        >
                            Send <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;