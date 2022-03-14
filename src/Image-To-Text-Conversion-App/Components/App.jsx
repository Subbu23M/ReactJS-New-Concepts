import React,{useState,useEffect} from 'react';
import '../Styling/Main.scss';
import { createWorker } from 'tesseract.js';

const App = () => {
    // Array Destructuring - ES6
    const [selectedFile, setSelectedFile] = useState(null);
    const [text, setText] = useState('');

    // Event Handler as callback function
    const handleSelect = (e) => {
        // Invoke State function
        setSelectedFile(e.target.files[0]);
    }
    const worker = createWorker();

    const convertImageToText = (async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const {
            data
        } = await worker.recognize(selectedFile);
        // console.log(data);
        setText(data.text);
    })

    // Invoke useEffect Hook
    useEffect(() => {
        convertImageToText()
    }, [selectedFile]);

    return(
        <section className='p-5'>
            <h2 className='text-danger'>
                Image To Text
            </h2>
            <p className='lead text-dark'>
                Get words in image!
            </p>

            <form>
                <div className='form-group'>
                    <label 
                        htmlFor="UploadFile"
                    >
                        Upload Image
                    </label>
                    <input 
                        type="file" 
                        id="UploadFile" 
                        accept='image/*'
                        className='form-control-file'
                        onChange={handleSelect}
                    />
                </div>
            </form>

            <div className='row'>

                {
                    selectedFile && <div className='col-lg-6'>
                        <img
                            src = {URL.createObjectURL(selectedFile)}
                            alt='thumbnail'
                            className='img-fluid'
                        />
                    </div>
                }

                {
                    text && <div className='col-lg-6'>
                        <p className='lead'> 
                            {text}
                        </p>
                    </div>
                }

            </div>

        </section>
    )
}

export default App;