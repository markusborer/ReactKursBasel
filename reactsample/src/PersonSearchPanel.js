import React from 'react';
import PersonSearchResult from './PersonSearchResult';
import PersonSearchForm from './PersonSearchForm';
import axios from 'axios';

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
            <>
                <h2>Personensuche</h2>
                <PersonSearchForm onChange={this.onChange} />
                <PersonSearchResult persons={this.state.persons} />
            </>
        )
    }


}

export default PersonSearchPanel;
