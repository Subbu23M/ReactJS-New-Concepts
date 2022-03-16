import React,{useCallback} from 'react';

const Toast = ({data,setToastList}) => {
    const deleteLogic = (id) => {
        const result = data.filter((ele) => ele.id !== id);

        // Invoke callback function
        setToastList(result);
    }

    // Invoke useCallback hook
    const deleteToast = useCallback(deleteLogic, [data, setToastList]);

    return(
        <div className='bottom-right'>
            {
                data.map((ele)=>{
                    // Object Destructuring - ES6
                    const {
                        id,
                        title,
                        description,
                        backgroundColor
                    } = ele;
                    
                    return(
                        <div 
                            className='card'
                            key={id} 
                            style={
                                {
                                    backgroundColor:backgroundColor
                                }
                            }
                        >
                            <div 
                                className='card-body'
                            >
                                <button 
                                    className='btn crossIcon'
                                    onClick={() => deleteToast(id)}
                                >
                                    X
                                </button>

                                <div className='card-body-two'>
                                    <h3 
                                        className='font-weight-bold text-capitalize'
                                    >
                                        {title}
                                    </h3>
                                    <p
                                        className='lead'
                                    >
                                        {description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Toast;