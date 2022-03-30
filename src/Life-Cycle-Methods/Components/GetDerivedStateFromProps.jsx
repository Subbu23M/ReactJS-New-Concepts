import React from 'react';

class GetDerivedStateFromProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favouriteCity : 'Hyderabad'
        }
    }

    // The getDerivedStateFromProps method is called right before the render method
    // It takes state as an argument, and returns an object with changes to the state.
    static getDerivedStateFromProps(props,state){
        console.log(state);
        return {
            favouriteCity : props.favCity 
        }
    }

    render(){
        return(
            <>
                <h2>
                    My Favourite City - {this.state.favouriteCity}
                </h2>
            </>
        )
    }
}

export default GetDerivedStateFromProps;