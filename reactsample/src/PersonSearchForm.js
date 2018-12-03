import React from 'react';

function PersonSearchForm(props) {
    return (
        <div>
            <span>Name: </span>
            <input onKeyUp={(e) => props.onChange(e.target.value)} />
        </div>
    )
}

export default PersonSearchForm;
