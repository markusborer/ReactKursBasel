import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
            <Timer />
            <Login name='Markus' />
        </main>
      </div>
    );
  }
}

export default App;
