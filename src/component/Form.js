import React, { useState } from 'react';
import FormList from './FormList';

const Form = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const removeName = (id) => {
        let newList = list.filter((person) => person.id !== id);
        setList(newList)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const person = { id: new Date().getTime().toString(), name, text };
            console.log(person);
            setList((list) => {
                return [...list, person];
            });
            setName('');
            setText('');
        } else {
            console.log('empty values');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
            </form>
            <FormList list={list} removeName={removeName} />
        </div>
    )
}

export default Form;