import React from 'react';

const SinglePerson = ({ name, removeName, id, text }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{text}</p>
            <button onClick={() => removeName(id)}>x</button>
        </div>
    );
};

export default SinglePerson;