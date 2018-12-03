import React from 'react';
import { Input } from 'react-materialize';

function PersonSearchForm(props) {
    return (
        <div>
            <Input label="Name" onKeyUp={(e) => props.onChange(e.target.value)} />
        </div>
    )
}

export default PersonSearchForm;
