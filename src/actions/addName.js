import firebase from '../firebase/firebase';
import database from '../firebase/firebase';
export const addName = (name, text) => {
    return () => {

        return database.ref(`names`).push({ name, text }).then((ref) => {

        });

    }
}
export const fetchTask = () => async dispatch => {
    database.ref(`names`).on("value", snapshot => {
        dispatch({
            type: 'FETCH_TASKS',
            payload: snapshot.val()
        });
    });
};
