import React,{useState} from 'react';
import Button from './Button';
import Toast from './Toast';
import '../Styling/Main.scss';

const App = () => {
    // Array Destructuring - ES6
    const [toastList, setToastList] = useState([]);

    // Declared & Assigned
    let toastProperties = null;

    const showToast = (type) => {
        switch(type){
            case 'success' : 
            // reassigned
            toastProperties = {
                id: 1,
                title: 'success',
                description: 'I am success toast which you clicked',
                backgroundColor: '#5cb85c'
            }
            break;
            
            case 'warning' : 
            // reassigned
            toastProperties = {
                id: 2,
                title: 'warning',
                description: 'I am warning toast which you clicked',
                backgroundColor: '#f0ad4e'
            }
            break;

            case 'danger' : 
            // reassigned
            toastProperties = {
                id: 3,
                title: 'danger',
                description: 'I am danger toast which you clicked',
                backgroundColor: '#d9534f'
            }
            break;

            case 'primary' : 
            // reassigned
            toastProperties = {
                id: 4,
                title: 'primary',
                description: 'I am primary toast which you clicked',
                backgroundColor: '#0275d8'
            }
            break;

            default:toastProperties = [];
        }

        // Invoke State function
        setToastList([...toastList,toastProperties]);
    }
    return(
        <>
            <h1 className='text-center'>
                React-Toast-App
            </h1>

            <section className='d-flex justify-content-center align-items-center'>
                <Button
                    text = 'success'
                    handleClickToast = {() => {showToast('success')}}
                />
                <Button
                    text = 'warning'
                    handleClickToast = {() => {showToast('warning')}}
                />
                <Button
                    text = 'danger'
                    handleClickToast = {() => {showToast('danger')}}
                />
                <Button
                    text = 'primary'
                    handleClickToast = {() => {showToast('primary')}}
                />
            </section>

            <Toast
                data={toastList}
                setToastList={setToastList}
            />
        </>
    )
}

export default App;