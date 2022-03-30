import React from 'react';
import './Styling/Main.scss';
import DisplayName from './Components/DisplayName';
import TableBody from './Components/TableBody';

class App extends React.Component{
    //Maintain state here 
    constructor(props) {
        super(props);

        this.state = {
            myName: 'Apple',
            myTasks: [{
                    task: 'reading newspaper',
                    status: false
                },
                {
                    task: 'reading books',
                    status: false
                },
                {
                    task: 'watching newschannels',
                    status: false
                }
            ],
            newTask: ''
        }
    }

    // Controlled Components
    updateInputValue = (e) => {
        this.setState({
            newTask: e.target.value
        });
    }

    // Add task dynamically
    addTask = (e) => {
        e.preventDefault();
        this.setState({
            // Adding task at first position
            myTasks: [{
                task: this.state.newTask,
                status: false
            }, ...this.state.myTasks]
        })
        // To reset form field
        this.setState({
            newTask: ''
        })
    }

    // Changing status for each task
    toggleTask = (task) => {
        this.setState({
            myTasks: this.state.myTasks.map((item) => {
                // console.log(item);
                return item.task === task.task ? {
                    ...item,
                    status: !item.status
                } : item
            })
        })
    }

    render(){
        return(
            <div className='container'>

                <div className="row">
                    {/* Child Component Instance */}
                    <DisplayName
                        myName = {this.state.myName}
                    />
            
                    <div className="col-12 my-2">
                        <form>
                            <input 
                                type="text"
                                className='form-control'
                                value={this.state.newTask}
                                onChange={this.updateInputValue}
                            />
                            <button
                                type='submit'
                                className='btn btn-primary my-2 shadow-none'
                                onClick={this.addTask}
                            >
                                Add Task
                            </button>
                        </form>
                    </div>

                    <div className="col-12">
                        <table
                                className='table'
                            >
                                <thead>
                                    <tr>
                                        <th>
                                            Task 
                                        </th>
                                        <th className='text-center'>
                                            Completed
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.state.myTasks.map((ele, index) => {
                                                    const {
                                                        task,
                                                        status
                                                    } = ele;
                                            return(
                                                <tr key={index}>
                                                    {/* Child Component Instance */}
                                                    <TableBody
                                                        task={task}
                                                        checked={status}
                                                        callBack={this.toggleTask}
                                                        ele={ele}
                                                    />
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;