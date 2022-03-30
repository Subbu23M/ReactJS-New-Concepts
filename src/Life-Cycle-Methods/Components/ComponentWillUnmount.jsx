import React from 'react';
import Child from './Child';

class ComponentWillUnmount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            boolValue : true 
        }
    }

    deleteComponent = () => {
        this.setState({boolValue:false})
    }

    render(){
        // Declared
        let myChild;

        if(this.state.boolValue){
            // reassigned
            myChild = <Child/>
        }
        return(
            <>
                {myChild}
                <button
                    className='btn btn-danger'
                    onClick={this.deleteComponent}
                >
                    Delete Component 
                </button>
            </>
        )
    }

}

export default ComponentWillUnmount;