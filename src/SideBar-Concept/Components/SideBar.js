import React from 'react';

import { SideBarData } from './SideBarData';

const SideBar = () => {
    return <div className='sideBarChild'>

        <ul className='unOrder'>
            {
                SideBarData.map((value,index) => {
                    // console.log(value);

                    // Object Destructuring - ES6
                    const{title,icon,link} = value;
                    
                    return (
                        <li 
                            key={index} 
                            className='text-capitalize listIng'
                            
                            // Ternary Operator
                            id = {window.location.pathname === link ? 'active' : ''}

                            onClick={() => {window.location.pathname = link}}
                        >
                            <div className='iCon'>
                                {icon}
                            </div>
                            <div className='tItle'>
                                {title}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        
    </div>
}

export default SideBar;