import React from 'react';

const PostsDataMap = (props) => {
    // Object Destructuring - ES6
    const{data} = props;

    return(
        <>
            {/* Embed Expression */}
            {
                data.map((post,index) => {
                    // Object Destructuring - ES6
                    const{id,title,body} = post;

                    return(
                        <div className='card bg-light text-dark my-2' key={index}>

                            <div className='card-body rounded'>
                                <h3 className='text-capitalize card-title'>
                                    post<span className='text-uppercase'>id</span>:{id}
                                </h3>

                                <h6 className='card-title font-weight-bold'>
                                    {title}
                                </h6>

                                <p className='lead'>
                                    {body}
                                </p>
                            </div>

                        </div>
                    )
                })
            }
        </>
    )

}
export default PostsDataMap;