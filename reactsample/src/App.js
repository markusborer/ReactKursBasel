import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Login from './Login';
import PersonSearchPanel from './PersonSearchPanel';
import { Row, Col } from 'react-materialize';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    onLoginClick = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    }

    render() {
        let welcomeMessage;
        if (this.state.isLoggedIn) {
            welcomeMessage = <div>{'Welcome ' + this.props.name}</div>;
        }
    return (
      <div className="App container">
        <header className="App-header">
            <Row>
                <Col s={4} m={4} className="left-align">
                    <Login isLoggedIn={this.state.isLoggedIn} onClick={this.onLoginClick} />
                </Col>
                <Col s={4} m={4}>
                    <img src={logo} className="App-logo" alt="logo" />
                    {welcomeMessage}
                </Col>
                <Col s={4} m={4}></Col>
            </Row>
        </header>
        <main className="grey lighten-3">
            {this.state.isLoggedIn && <PersonSearchPanel />}
        </main>
          <footer className="black white-text">
              <Timer />
          </footer>
      </div>
    );
  }
}

export default App;
