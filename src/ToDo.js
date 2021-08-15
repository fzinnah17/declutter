import React from 'react';

export default function Todo({ title, completed}) {
    return (
        <form>
            <div class="inline-field">
            <input type="checkbox" id="checkbox" name="accept" value="yes">
        </input>
        <label
            for="checkbox-inline"
            className= "list-group-item d-flex justify-content-between my-2"
            >
            <h6 
                className={` ${completed ? 'completed-task' : ''}`}
            >{title}
            </h6>
        </label>
            </div>
        </form>
    )
}