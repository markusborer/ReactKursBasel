import React from 'react';
import { Table } from 'react-materialize';
import styles from './PersonSearchResult.module.css';

export default function PersonSearchResult(props) {
    return (
        <Table hoverable={true}>
            <thead>
                <PersonSearchHeader />
            </thead>
            <tbody>
                {props.persons.map(person => <PersonSearchRow person={person} key={person.id} />)}
            </tbody>
        </Table>
    )
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
    if (props.person.name === 'XXX1') {
        throw new Error('I crashed');
    }
    return (
        <tr>
            <td className={styles.italic}>{props.person.id}</td>
            <td>{props.person.name}</td>
            <td>{props.person.vorname}</td>
        </tr>
    )
}
