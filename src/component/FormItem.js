import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTasks from './AddForm';
// import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import database from '../firebase/firebase';
import uuid from 'react-uuid';

const TaskItem = (props) => {
    const dispatch = useDispatch();
    const [task, setTask] = useState(props.task);
    const [index, setIndex] = useState(props.index);
    const [selectedDate, setSelectedDate] = useState(null);
    const [editing, setEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({});
    // const date = new Date()
    const userId = useSelector(state => state.auth.user.uid);

    const saveTask = () => {
        setEditing(false);
        const payload = { id: currentTask.id, text: currentTask.text, completed: false }
        const dbtasksWrapper = database.ref().child(userId).child('tasks');
        dbtasksWrapper.child(payload.id).update(payload).then(() => {
            dispatch({ type: "ADD_TASKS", payload });
        })
    }

    const completeTask = () => {
        const payload = { id: task.id, text: task.text, completed: true }
        const dbtasksWrapper = database.ref().child(userId).child('tasks');
        dbtasksWrapper.child(payload.id).update(payload).then(() => {
            dispatch({ type: 'COMPLETE_TASK', payload })
        })
    }

    const removeTask = (id) => {
        console.log(id);
        const dbtasksWrapper = database.ref().child(userId).child('tasks');
        dbtasksWrapper.child(id).remove().then(() => {
            dispatch({ type: 'REMOVE_TASK', id: id })
            console.log('removed');
        })
    }

    const editTask = (task) => {
        setCurrentTask(task);
        setEditing(true);
    }

    useEffect(() => {
        setTask(props.task);
        setIndex(props.index);
    }, [props])


    return (

        <li
            index={index}
            key={task.id}
            style={{
                textDecoration: !task.completed ? 'inherit' : 'line-through'
            }}
        >
            <div>
                {
                    !task.completed ? <p></p> : <p className="alert alert-danger" >Task Completed </p>

                    //     <div>
                    //         {/* {Object.values(task.completed.toString()).length }  */}
                    //     </div>
                }
            </div>
            <div className="border">
                {editing ?
                    <div>
                        <input type='text' onChange={e => setCurrentTask({ ...currentTask, text: e.target.value })} value={currentTask.text} />

                        {/* <DatePicker
                            className="input-group-prepend"
                            placeholderText="Enter task date "
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy H:mm aa"
                            minDate={date}
                        /> */}
                    </div>
                    :
                    <div>
                        <h3> {task.text} </h3>
                        <p>{task.addedAt && task.addedAt.toString()}</p>

                    </div>
                }

                {editing ?
                    <div>
                        <input type='button' className='btn btn-primary' onClick={() => saveTask(task.id)} value='Save Task' />
                        <input type='button' className='btn btn-link' onClick={() => setEditing(false)} value='Cancel' />
                    </div>

                    :
                    <div>
                        <input className="btn btn-info btn-sm" type='button' value='CompleteTask' onClick={() => completeTask(task.id)} />
                        <input className="btn btn-danger btn-sm" type='button' value='Remove Task' onClick={() => removeTask(task.id)} />
                        <input type='button' className="btn btn-primary" onClick={() => editTask(task)} value='Edit Task' />
                    </div>
                }
            </div>
        </li>
    )
}

export default TaskItem;