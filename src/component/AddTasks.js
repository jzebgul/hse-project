import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import database from '../firebase/firebase';


const AddTasks = () => {

    const dispatch = useDispatch();
    const newLocal = null;
    const [selectedDate, setSelectedDate] = useState(newLocal);
    const [task, setTask] = useState('');
    const date = new Date()
    const userId = useSelector(state => state.auth.uid);


    const addTask = () => {
        const payload = { id: uuid(), text: task, completed: false, addedAt: selectedDate.toString() }
        const dbtasksWrapper = database.ref().child(userId).child('tasks');
        return dbtasksWrapper.child(payload.id).update(payload).then(() => {
            setTask('');
            setSelectedDate(null);
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
            <DatePicker className="input-group-prepend" placeholderText="Enter task date " selected={selectedDate} onChange={(date) => setSelectedDate(date)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} timeCaption="time" dateFormat="MMMM d, yyyy H:mm aa" minDate={date} /><br />
            <input className="btn btn-primary" type='submit' value='Submit' />

        </form>
    );


};


export default AddTasks;