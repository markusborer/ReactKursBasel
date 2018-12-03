import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }

}

export default Timer;
