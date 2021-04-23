import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { database } from '../firebase/firebase';


const AddTasks = () => {

    const dispatch = useDispatch();
    // const newLocal = null;
    //const [selectedDate, setSelectedDate] = useState(newLocal);
    const [task, setTask] = useState('');
    // const date = new Date()
    const userId = useSelector(state => state.auth.user.uid);


    const addTask = () => {
        const payload = { id: uuid(), text: task }
        const dbtasksWrapper = database.ref().child(userId).child('tasks');
        return dbtasksWrapper.child(payload.id).update(payload).then(() => {
            setTask('');
            dispatch({ type: "ADD_TASKS", payload })
        })
    }

    return (
        <form onSubmit={e => {
            e.preventDefault(e.target.value);
            addTask();
        }}>
            <input className="input-group-prepend"
                value={task}
                placeholder="Enter your Task"
                onChange={e => setTask(e.target.value)}
            />

            <input type='submit' value='Submit' />

        </form>
    );


};


export default AddTasks;