import React from 'react';
import DisplayCard from './DisplayCard';

const ListApi = ({dataOne}) => {
    return(
        <>
            <h3 className='text-center text-primary'>
                List API
            </h3>
            
            {/* Child Component Instance */}
            <DisplayCard
                data = {dataOne}
            />
        </>
    )
}

export default ListApi