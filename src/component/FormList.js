import React from 'react';
import SinglePerson from './SinglePerson';
const FormList = ({ name }) => {
    return (
        <div>
            {name.map((person, index) => {

                return (
                    <SinglePerson {...person} key={index} />
                );
            })}
        </div>
    )
}
export default FormList;