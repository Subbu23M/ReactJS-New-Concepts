import React from 'react'

const MeaningList = ({meaning}) => {
    // console.log(meaning);

    const result = (
        meaning.map((ele) => {
            // console.log(ele);
            const{meanings} = ele;
            return (
                meanings.map((eleOne)=>{
                    const{definitions} = eleOne;
                    return(
                        definitions.map((eleTwo,i)=>{
                            const {definition} = eleTwo;
                            return(
                                <ul key={i}>
                                    <li>
                                        {definition}
                                    </li>
                                    <hr/>
                                </ul>
                            )
                        })
                    )
                })
            )
        })
    )

    return(
        <>
            {result} 
        </>
    )
}

export default MeaningList;