import React, { Component } from 'react';

class Taskform extends Component {
    getInputValue = (event) => {
        const userValue = event.target.value;
        console.log(userValue);
    }

    render() { 
        return (
            <input type="text" onChange={this.getInputValue}></input>
        );
    }
}
 
export default Taskform;