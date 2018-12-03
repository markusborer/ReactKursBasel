import React from 'react';

class PersonSearchResult extends React.Component {

    render() {
        let rows = this.props.persons.map(person =>
            <PersonSearchRow person={person} key={person.id} />
        );
        return (
            <table>
                <thead>
                    <PersonSearchHeader />
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }

}

function PersonSearchHeader() {
    return (
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Vorname</th>
        </tr>
    )
}

const PersonSearchRow = (props) => {
    return (
        <tr>
            <td>{props.person.id}</td>
            <td>{props.person.name}</td>
            <td>{props.person.vorname}</td>
        </tr>
    )
}

export default PersonSearchResult;
