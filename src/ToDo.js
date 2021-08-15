import React from 'react';

export default function Todo({ title, completed }) {
    return (
        <label
            className= "list-group-item d-flex justify-content-between my-2">
            <h6 
                className={`align-middle ${completed ? 'completed-task' : ''}`}
            >{title}</h6>
        </label>
    )
}