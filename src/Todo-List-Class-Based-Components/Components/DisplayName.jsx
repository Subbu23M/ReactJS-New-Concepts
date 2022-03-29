import React from 'react';

class DisplayName extends React.Component{
    render(){
        return(
            <div className="col-12 bg-dark text-center text-light py-1">
                <h1>
                    {this.props.myName} - Todo-List
                </h1>
            </div>
        )
    }
}

export default DisplayName;