import React from 'react';

class Child extends React.Component{
    componentWillUnmount(){
        alert('It is ok to hide text?');
    }

    render(){
        return(
            <h1>
                Hello everyone
            </h1>
        )
    }
}

export default Child;