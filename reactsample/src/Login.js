import React from 'react';

function Login(props) {
    let buttonText = 'Login';
    if (props.isLoggedIn) {
        buttonText = 'Logout';
    }
    return <button onClick={props.onClick} >{buttonText}</button>
}

export default Login;