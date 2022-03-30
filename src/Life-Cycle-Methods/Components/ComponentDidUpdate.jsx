import React from 'react';

class ComponentDidUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favouriteFlower : 'lotus'
        }
    }

    componentDidMount(){
        const result = () => {
            this.setState({favouriteFlower:'lilly'})
        }
        setTimeout(result,1000);
    }

    // When there is a change
    componentDidUpdate(){
        document.querySelector('#after').innerHTML = `After Some time - ${this.state.favouriteFlower}`
    }

    render(){
        return(
            <>
                <h1>
                    My Favourite Flower - {this.state.favouriteFlower}
                </h1>
                <p
                    id='after'
                >  
                </p>
            </>
        )
    }
}

export default ComponentDidUpdate;