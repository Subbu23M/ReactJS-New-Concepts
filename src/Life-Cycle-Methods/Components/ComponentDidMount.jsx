import React from 'react';

class ComponentDidMount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favouriteCar : 'Hyundai'
        }
    }

    // The componentDidMount() method is called after the component is rendered. like 'Asynchronous nature'
    componentDidMount(){
        const result = () => {
            this.setState({favouriteCar:'Maruthi'})
        }
        setTimeout(result,1000);
    }

    render(){
        return(
            <>
                <h1>
                    My Favourite Car - {this.state.favouriteCar}
                </h1>
            </>
        )
    }

}

export default ComponentDidMount;