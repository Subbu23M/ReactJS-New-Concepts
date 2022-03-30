import React from 'react';

class ShouldComponentUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favouriteCountry : 'Europe'
        }
    }

    // In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
    shouldComponentUpdate(){
        return false;
    }

    // Updating Value
    handleCountry = () => {
        this.setState({favouriteCountry:'USA'})
    }

    render(){
        return(
            <>
                <h3>
                    My Favourite Country - {this.state.favouriteCountry}
                </h3>
                <button
                    className='btn btn-primary'
                    onClick={this.handleCountry}
                >
                    Change Country
                </button>
            </>
        )
    }

}

export default ShouldComponentUpdate;