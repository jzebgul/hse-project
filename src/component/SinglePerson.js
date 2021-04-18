import React from 'react';

const SinglePerson = (props) => {
    return (
        <div>
            <h1>{props.person.name}</h1>
            <p>{props.person.text}</p>
            <button onClick={() => props.removeName(props.person.id)}>x</button>
        </div>
    );
};

export default SinglePerson;