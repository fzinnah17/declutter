import React, {Component} from 'react';

export default class Todo extends Component {
    render() {
        const {item, title, completed} = this.props  
        
        return (
            <label className= "list-group-item d-flex justify-content-between my-2">
                <h6 className={` align-middle ${completed ? 'completed-task' : ''}`}>{title}</h6>
            </label>
        )
    }
}