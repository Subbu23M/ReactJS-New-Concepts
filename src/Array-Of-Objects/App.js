import React from 'react';

import {data} from './data';

const App = () => {
    return <>
        {
            data.map((ele,index) => {
                console.log(ele);
                
                // Object Destructuring - ES6
                const{name,icon} = ele;
                return(
                    <>
                        <h1>
                            {name}
                        </h1>

                        <span>
                            <i className={icon}>
                            </i>
                        </span>

                    </>
                    
                )
            })
        }
    </>
};

export default App;