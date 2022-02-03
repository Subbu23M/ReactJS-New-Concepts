import React from 'react';

import { useFormik } from 'formik';

import * as yup from 'yup';

// Step-1
const initialValues = {
    name:'',
    email:'',
    age:''
}

// Step-2
const onSubmit = (values) => {
    console.log(values);
    resetForm({values:""});
}

// Step-3 Validating form
const validationSchema = yup.object({
    name:yup.string().required('Required'),
    email:yup.string().email('invalid email format').required('Required'),
    age:yup.string().required('Required'),
})

const Input = (props) => {
    const formik = useFormik({
        // ES6 Concise Property
        initialValues,

        // Method
        onSubmit,

        // validation
        validationSchema
    })
    return <>
        <div className='form-group'>

            <input
                type='text'
                placeholder='Enter Your Name'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            {/* Conditional Rendering - Simple...if */}
            {
                (
                    (formik.errors.name && formik.touched.name) && <span className='text-danger'> {formik.errors.name} </span> 
                )
            }

        </div>

        <button
            type='submit'
            className='btn btn-primary text-light'
            onClick={formik.handleSubmit}
        >
            Submit
        </button>
    </>
};

export default Input;