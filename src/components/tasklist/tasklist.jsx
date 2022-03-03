import React, { Component } from 'react';
import Task from '../task/task';

class Tasklist extends Component {
    state = {
        tasks: [
            {id: 1, task: "Go for a walk"},
            {id: 2, task: "Go grocery shopping"}
        ]
    }

    render() { 
        return (
            <React.Fragment>
                <ul>
                    {this.state.tasks.map((task, index) => (
                        
                        <li>{task.task}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}
 
export default Tasklist;