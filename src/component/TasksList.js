import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import database from '../firebase/firebase';
import TaskItem from "./TaskItem";
import { fetchTasks } from '../actions/taskActions';


// import reducer from '../reducer';

const TasksList = () => {
    const tasks = useSelector(state => state.tasks);
    const userId = useSelector(state => state.auth.uid);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks(userId));
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
