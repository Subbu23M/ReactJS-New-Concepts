import React from 'react'

const ExampleList = ({meaning}) => {
    // console.log(meaning);

    const result = (
        meaning.map((ele) => {
            // console.log(ele);
            const{meanings} = ele;
            return (
                meanings.map((eleOne)=>{
                    const{definitions} = eleOne;
                    return(
                        definitions?.map((eleTwo,i)=>{
                            const {example} = eleTwo;
                            return(
                                <ul key={i}>
                                    <li>
                                        {example}
                                    </li>
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

export default ExampleList;