import React from 'react';
import PersonSearchResult from './PersonSearchResult';
import PersonSearchForm from './PersonSearchForm';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';
import { fromEvent, of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Modal } from 'react-materialize';

class PersonSearchPanel extends React.Component {

    eventTarget = new EventTarget();

    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        this.subscription = fromEvent(this.eventTarget, "OnChange")
            .pipe(
                debounceTime(200),
                switchMap(event => {
                    return axios.get('http://localhost:8080/person?name=' + event.detail)
                        .catch(error => {
                            console.log(error);
                            this.setState({
                                error: 'Fehler bei der Serverabfrage'
                            });
                            return of(undefined);
                        });
                })
            )
            .subscribe(response => {
                if (response.data !== undefined) {
                    console.log(response);
                    this.setState({
                        persons: response.data,
                        error: undefined
                    })
                }
            });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    onChange = (text) => {
        this.eventTarget.dispatchEvent(
            new CustomEvent('OnChange', { detail: text })
        );
    }


    render() {
        let showResult = this.state.error === undefined;
        return (
            <ErrorBoundary>
                <h2 className="left-align">Personensuche</h2>
                <PersonSearchForm onChange={this.onChange} />
                {showResult && <PersonSearchResult persons={this.state.persons} />}
                {!showResult && <Modal header='Error' open={true}>{this.state.error}</Modal>
                }
            </ErrorBoundary>
        )
    }


}

export default PersonSearchPanel;
