import { tasksRef } from '../firebase/firebase';

const FETCH_TASKS = 'FETCH_TASKS';

export const addToDo = newTask => async dispatch => {
  tasksRef.push().set(newTask);
};

export const completeTask = completeTask => async dispatch => {
  todosRef.child(completeTask).remove();
};

export const fetchTask = () => async dispatch => {
  tasksRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TASKS,
      payload: snapshot.val()
    });
  });
};