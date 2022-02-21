import React from 'react';

// Modules for Form Validation
import { useFormik } from 'formik';
import * as yup from 'yup';

// Step-1
const initialValues = {
    firstName: '',
    lastName:'',
    middleName:'',
}

// Step-3
const validationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    middleName: yup.string().required()
});

// function component
const UserInfo = (props) => {
    // Step-2
    const onSubmit = (values, {
        resetForm
    }) => {
        console.log([values]);

        // To reset form
        resetForm({
            values: ""
        });
    }

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
    } = useFormik({

        // ES6 Concise Property
        initialValues,

        // Clickable event
        onSubmit,

        // Form Validation
        validationSchema
    })

    // Users Data
    const userInfoData = [{
        type: 'text',
        className: 'form-control form-control-md',
        placeholder: 'First Name',
        name: 'firstName',
        value: values.firstName,
        onChange: handleChange,
        onBlur: handleBlur
    }, {
        type: 'text',
        className: 'form-control form-control-md',
        placeholder: 'Last Name',
        name: 'lastName',
        value: values.lastName,
        onChange: handleChange,
        onBlur: handleBlur
    }, {
        type: 'text',
        className: 'form-control form-control-md',
        placeholder: 'Middle Name',
        name: 'middleName',
        value: values.middleName,
        onChange: handleChange,
        onBlur: handleBlur
    }];

    return(
        <section className='p-2 my-2'>
            <form autoComplete='off'>
                {/* 1 */}
                <div className='row'>
                    {/* Embed Expression */}
                    {
                        userInfoData.map((ele,i)=> {
                            // Object Destructuring - ES6
                            const{type,className,placeholder,name,value,onChange,onBlur} = ele;

                            return(
                                <div className='col' key={i}>
                                    <input
                                        type={type}
                                        className={className}
                                        placeholder={placeholder}
                                        name={name}
                                        value={value}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                    />
                                    {/* Conditional Rendering - Simple...if */}
                                    {
                                        (
                                            (errors.name && touched.name ) && <span className='text-danger'> {errors.name} </span>
                                            )
                                        }
                                    <br/>
                                </div>
                            )
                        })
                    }
                </div>
                <button
                    type='submit'
                    onClick={handleSubmit}
                    className='btn btn-primary'
                >
                    submit
                </button>
            </form>
        </section>
    )
}
export default UserInfo