import React, { Component } from 'react';
import Task from '../task/task';

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

        // Makes typing this out easier
        const taskArray = this.state.tasks;
        this.setState(() => {
            // Add a new task to the list
            return taskArray.push({
                id: taskArray.length + 1, 
                task: this.state.textValue
            });
        });

        // Reset the input for convenience
        this.mainInput.value = "";

    }

    handleComplete = () => {
        console.log("Deleting " + this);
    }

    render() { 
        return (
            <React.Fragment>
                <ul>
                    {this.state.tasks.map((task) => (
                        <li><Task 
                            task={task.task}
                            handleComplete={this.handleComplete}
                        /></li>
                    ))}
                </ul>
                <input 
                    type="text" 
                    onChange={this.getInputValue}
                    ref={(ref) => this.mainInput= ref}
                />
                <input type="submit" onClick={this.handleClick} />
            </React.Fragment>
        );
    }
}
 
export default Tasklist;