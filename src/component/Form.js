import React, { useState } from 'react';
import FormList from './FormList';
import { useDispatch } from 'react-redux';
import addName from '../actions/addName'
const Form = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const dispatch = useDispatch()
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
        dispatch(addName(name, text))
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
                <button type='submit'>add person</button>
            </form>
            <FormList list={list} removeName={removeName} />
        </div>
    )
}

export default Form;