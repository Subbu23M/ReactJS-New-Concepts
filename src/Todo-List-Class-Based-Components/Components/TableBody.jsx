import React from 'react';

class TableBody extends React.Component{
    render(){
        return(
            <>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <input 
                        type="checkbox" 
                        className='form-control text-center'
                        checked={this.props.checked}
                        onChange={() => {this.props.callBack(this.props.ele)}}
                    />
                </td>
            </>
        )
    }
}

export default TableBody;