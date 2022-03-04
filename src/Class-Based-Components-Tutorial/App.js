import React from 'react';

// 1)
class IncrementNumber extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    // Event Handler as callback function-1
    handleIncrementNum = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    // Event Handler as callback function-2
    handleReset = () => {
        this.setState({
            number: 0
        })
    }

    // Event Handler as callback function-3
    handleDecrementNum = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render(){
        return (
            <>
                <h3>
                    Current Number - {this.state.number}
                </h3>

                <div className='btnGroup d-flex justify-content-center align-items-center'>
                    <button 
                        className='btn btn-outline-warning text-dark'
                        onClick={this.handleIncrementNum}
                    >
                        Increment Number
                    </button>
                    <button 
                        className='btn btn-outline-warning text-dark m-2'
                        onClick={this.handleReset}
                    >
                        Reset Number
                    </button>
                    <button 
                        className='btn btn-outline-warning text-dark'
                        onClick={this.handleDecrementNum}
                    >
                        Decrement Number
                    </button>
                </div>
            </>
        )
    }
}

// componentDidMount
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color: 'blue'
            })
        }, 1000)
    }

    render(){
        return(
            <>
                <h1>
                    My favourite color - {this.state.color}
                </h1>
            </>
        )
    }
}

// shouldComponentUpdate()
class HeaderTwo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            favouriteCar: 'bmw'
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    // Event Handler as callback function
    handleChangeCarName = () => {
        this.setState({
            favouriteCar: 'toyota'
        })
    }

    render(){
        return(
            <>
                <h1>
                    My favourite car - {this.state.favouriteCar}
                </h1>

                <button
                    className='btn btn-outline-primary text-dark text-capitalize'
                    onClick={this.handleChangeCarName}
                >
                    change car name
                </button>
            </>
        )
    }
}

// 2)
class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    // Event Handler as callback function
    deleteHeader = () => {
        this.setState({
            show: false
        })
    }

    render(){
        // Declared
        let myText;

        if (this.state.show) {
            // Assigned
            myText = < Child / >
        }

        return(
            <>
                {myText}

                <button
                    className='btn btn-outline-danger text-warning text-capitalize'
                    onClick={this.deleteHeader}
                >
                    delete header
                </button>
            </>
        )
    }
}

// componentWillUnmount
class Child extends React.Component{
    componentWillUnmount() {
        alert('Text displayed on screen is going to disappear');
    }

    render(){
        return(
            <>
                <h1>
                    Hello Andhra Pradesh 
                </h1>
            </>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            countryName : 'South-India',
            stateName:'Andhra-Pradesh',
            colorValue:'brown'
        }
    }

    // Event Handler as callback function
    handleChangeColor = () => {
        this.setState({
            colorValue: 'red'
        })
    }

    render(){
        return(
            <>
                <h2>
                    Hello - I am from {this.state.stateName},{this.state.countryName} 
                </h2>

                <h3>
                    We are using {this.state.colorValue} color
                </h3>

                <button
                    className='btn btn-outline-secondary text-dark'
                    onClick={this.handleChangeColor}
                >
                    Change Color Value
                </button>
                <br/> <br/>

                /* Child Component Instances */
                <IncrementNumber/>
                <Header/>
                <HeaderTwo/> 
                <br/> <br/>
                <Container/>
            </>
        )
    }
}
export default App;