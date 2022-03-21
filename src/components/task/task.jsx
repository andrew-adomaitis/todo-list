import React, { Component } from 'react';
import "./task.css";

class Task extends Component {
    state = {
        id: this.props.id
    }
    render() { 
        return (
            <React.Fragment>
                <p>{this.props.task}</p>
                <button 
                    onClick={() => this.props.handleComplete(this.props.id)}
                >
                    Complete
                </button>
            </React.Fragment>
        );
    }
}
 
export default Task;