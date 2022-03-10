import React, { Component } from 'react';
import "./task.css";

class Task extends Component {
    render() { 
        return (
            <React.Fragment>
                <p>{this.props.task}</p>
                <button onClick={this.props.handleComplete}>Complete</button>
            </React.Fragment>
        );
    }
}
 
export default Task;