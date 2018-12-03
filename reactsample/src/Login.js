import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    onClick = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    }

    render() {
        let welcomeMessage;
        let buttonText = 'Login';
        if (this.state.isLoggedIn) {
            welcomeMessage = <div>{'Welcome ' + this.props.name}</div>;
            buttonText = 'Logout';
        }
        return (
            <>
                <button onClick={this.onClick} >{buttonText}</button>
                {welcomeMessage}
            </>
        )
    }
}

export default Login;