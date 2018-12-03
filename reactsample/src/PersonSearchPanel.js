import React from 'react';
import PersonSearchResult from './PersonSearchResult';
import PersonSearchForm from './PersonSearchForm';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';
import { fromEvent } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

class PersonSearchPanel extends React.Component {

    eventTarget = new EventTarget();

    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        fromEvent(this.eventTarget, "OnChange")
            .pipe(
                //debounceTime(200),
                switchMap(event => {
                    return axios.get('http://localhost:8080/person?name=' + event.detail);
                })
            )
            .subscribe(response => {
                console.log(response);
                this.setState({
                    persons: response.data
                })
            });
    }

    onChange = (text) => {
        this.eventTarget.dispatchEvent(
            new CustomEvent('OnChange', { detail: text })
        );
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
