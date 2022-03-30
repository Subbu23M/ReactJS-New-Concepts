import React from 'react';
import './Styling/Style.scss';
import ConstructorMethod from './Components/ConstructorMethod';
import GetDerivedStateFromProps from './Components/GetDerivedStateFromProps';
import ComponentDidMount from './Components/ComponentDidMount';
import ShouldComponentUpdate from './Components/ShouldComponentUpdate';
import GetSnapshotBeforeUpdate from './Components/GetSnapshotBeforeUpdate';
import ComponentDidUpdate from './Components/ComponentDidUpdate';
import ComponentWillUnmount from './Components/ComponentWillUnmount';

class App extends React.Component{
    render(){
        return(
            <>
                <h2 className='text-center py-2 bg-light text-secondary'>
                    React Life Cycle Methods 
                </h2>
                {/* Child Component Instances */}
                <ConstructorMethod/>
                <GetDerivedStateFromProps
                    favCity = 'Bangalore'
                />
                <ComponentDidMount/>
                <ShouldComponentUpdate/>
                <GetSnapshotBeforeUpdate/>
                <ComponentDidUpdate/>
                <ComponentWillUnmount/>
            </>
        )
    }
}

export default App;