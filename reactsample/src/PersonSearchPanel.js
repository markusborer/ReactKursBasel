import React from 'react';
import PersonSearchResult from './PersonSearchResult';
import PersonSearchForm from './PersonSearchForm';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';

class PersonSearchPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }

    onChange = (text) => {
        axios.get('http://localhost:8080/person?name=' + text)
            .then(res => {
                this.setState({
                    persons: res.data
                })
            })
    }


    render() {
        return (
            <ErrorBoundary>
                <h2 className="left-align">Personensuche</h2>
                <PersonSearchForm onChange={this.onChange} />
                <PersonSearchResult persons={this.state.persons} />
            </ErrorBoundary>
        )
    }


}

export default PersonSearchPanel;
