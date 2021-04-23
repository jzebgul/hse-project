import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import AddTasksForm from "./AddTasks";
import FormItem from "./FormItem";
import database from '../firebase/firebase';

// import reducer from '../reducer';

const FormList = () => {
    const tasks = useSelector(state => state.tasks);
    const userId = useSelector(state => state.auth.uid);

    return (
        <div>
            <div>Todo List Items</div>
            <ul>
                {tasks !== null ? Object.values(tasks).map((task, index) => (
                    <FormItem
                        task={task}
                        index={index}
                    />
                )) : ''
                }
            </ul>
        </div>
    );
}
export default FormList;
