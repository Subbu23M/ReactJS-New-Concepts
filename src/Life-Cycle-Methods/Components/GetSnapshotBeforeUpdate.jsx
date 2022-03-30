import React from 'react';

class GetSnapshotBeforeUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favouritePlace : 'Cochin'
        }
    }

    componentDidMount(){
        const result = () => {
            this.setState({favouritePlace:'Munnar'})
        }
        setTimeout(result,1000);
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        return document.querySelector('#beforeUpdate').innerHTML = `Before Update - ${prevState.favouritePlace}`
    }

    componentDidUpdate(){
        document.querySelector('#afterUpdate').innerHTML = `After Update - ${this.state.favouritePlace}`
    }

    render(){
        return(
            <>
                <h4>
                    My Favourite Place - {this.state.favouritePlace}
                </h4>
                <p
                    id='beforeUpdate'
                >
                </p>
                <p
                    id='afterUpdate'
                >
                </p>
            </>
        )
    }

}

export default GetSnapshotBeforeUpdate;