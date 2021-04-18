import React, { useEffect, useState } from 'react';
import FormList from './FormList';
import { useDispatch } from 'react-redux';
import { addPerson, fetchPersons } from '../actions/personsActions';
import { useSelector } from 'react-redux';
import database from '../firebase/firebase';

const Form = () => {

    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const list = useSelector(state => state.persons);
    const [person, setPerson] = useState({});
    const dispatch = useDispatch();

    const removeName = (id) => {
        let newList = list.filter((person) => person.id !== id);
    }

    useEffect(() => {
        dispatch(fetchPersons());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name) {
            setPerson({ id: new Date().getTime().toString(), name: name, text: text, date: new Date() });
            addPerson(person);

            setName('');
            setText('');
        } else {
            console.log('empty values');
        }
    };

    return (
        <div>
            <div>{'List'}</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
                <button type='submit'>add person</button>
            </form>
            {list && <FormList list={Object.values(list)} removeName={removeName} />}
        </div>
    )
}

export default Form;