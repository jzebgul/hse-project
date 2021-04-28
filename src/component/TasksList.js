import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import database from '../firebase/firebase';
import TaskItem from "./TaskItem";


// import reducer from '../reducer';

const TasksList = () => {
    const tasks = useSelector(state => state.tasks);
    const userId = useSelector(state => state.auth.uid);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTasks = () => {
            const dbtasksWrapper = database.ref().child(userId).child('tasks');
            dbtasksWrapper.on('value', snap => {
                const tasks = snap.val();
                dispatch({ type: 'SET_TASKS', tasks })
            });
        };

        fetchTasks();
    }, [])

    //const userId = useSelector(state => state.auth.uid);
    return (
        <div>
            <div>Todo List Items</div>
            <ul>
                {tasks !== null ? Object.values(tasks).map((task, index) => (
                    <TaskItem
                        task={task}
                        index={index}
                    />
                )) : ''
                }
            </ul>
        </div>
    );
}
export default TasksList;
