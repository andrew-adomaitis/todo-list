import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: this.props.task,
            id: this.id.task,
            
        }
    }

    render() { 
        return (
            <React.Fragment>
                <p>Testing for now</p>
            </React.Fragment>
        );
    }
}
 
export default Task;