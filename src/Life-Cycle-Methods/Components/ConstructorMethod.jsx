import React from 'react';

// The constructor method is called, by React, every time you make a component
class ConstructorMethod extends React.Component{
    constructor(props) {
        console.log('i am constructor');
        super(props);
        this.state = {
            myName: 'Subramanyam'
        }
    }

    // render() method is required, and is the method that actually outputs the HTML to the DOM.
    render(){
        return(
            <>
                <h1>
                    Hello,My name is {this.state.myName}
                </h1>
            </>
        )
    }
}

export default ConstructorMethod;