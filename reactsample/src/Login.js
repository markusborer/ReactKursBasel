import React from 'react';
import { Button, Icon } from 'react-materialize';


function Login(props) {
    let buttonText = 'Login';
    if (props.isLoggedIn) {
        buttonText = 'Logout';
    }
    return (
        <Button onClick={props.onClick} >{buttonText}
            <Icon left>{props.isLoggedIn ? 'power_settings_new' : 'exit_to_app'}</Icon>
        </Button>
    )
}

export default Login;