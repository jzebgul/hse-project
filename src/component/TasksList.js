import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';

import TaskItem from "./TaskItem";


// import reducer from '../reducer';

const TasksList = () => {
    const tasks = useSelector(state => state.tasks);
    const userId = useSelector(state => state.auth.uid);

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
