import React from 'react';
import SinglePerson from './SinglePerson';
const FormList = ({ list, removeName, id }) => {
    return (
        <div>
            {list.map((person) => {
                return (
                    <SinglePerson person={person} key={id} removeName={removeName} />
                );
            })}
        </div>
    )
}
export default FormList;