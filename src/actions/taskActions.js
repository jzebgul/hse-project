import database from '../firebase/firebase';

// export const addToDo = newTask => async dispatch => {
//   tasksRef.push().set(newTask);
// };

// export const completeTask = completeTask => async dispatch => {
//   todosRef.child(completeTask).remove();
// };

export const fetchTasks = (userId) => async dispatch => {
  const dbtasksWrapper = database.ref().child(userId).child('tasks');

  dbtasksWrapper.on('value', snap => {
      const tasks = snap.val();
      dispatch({ type: 'SET_TASKS', tasks })
  });
};

export const clearTasks = () => ({
  type: 'CLEAR_TASKS'
});
