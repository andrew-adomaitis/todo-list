import React, { Component } from 'react';
import Taskform from '../task/taskform/taskform';

class Tasklist extends Component {
    state = {
        textValue: "",
        tasks: [
            {id: 1, task: "Go for a walk"},
            {id: 2, task: "Go grocery shopping"}
        ]
    }

    // Updates the textValue state, so we can use it later
    getInputValue = (event) => {
        const userValue = event.target.value;
        this.state.textValue = userValue;
    }

    // Adds a new task to the list
    handleClick = (e) => {
        e.preventDefault();

        const taskArray = this.state.tasks;
        this.setState(() => {
            return taskArray.push({
                id: taskArray.length + 1, 
                task: this.state.textValue
            });
        });
    }

    render() { 
        return (
            <React.Fragment>
                <ul>
                    {this.state.tasks.map((task, index) => (
                        <li>{task.task}</li>
                    ))}
                </ul>
                <input 
                    type="text" 
                    onChange={this.getInputValue} 
                />
                <input type="submit" onClick={this.handleClick} />
            </React.Fragment>
        );
    }
}
 
export default Tasklist;