import React from 'react';
import {data} from './data';

const IconWithText = (props) => {
    return(
        <>
            {
                data.map((ele, index) => {
                            // console.log(ele);

                            // Object Destructuring - ES6
                            const {
                                name,
                                icon
                            } = ele;

                    return(
                        <section key={index}>
                            <h1>
                                {name} - <span> <i className={icon}> </i> </span>
                            </h1>
                        </section>
                    )
                })
            }
        </>
    )
}
export default IconWithText;