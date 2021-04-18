import firebase from '../firebase/firebase';
import database from '../firebase/firebase';

export const addPerson = (personValue) => {
    database.ref(`persons`).push(personValue);
}

export const fetchPersons = () => async dispatch => {
    database.ref(`persons`).on("value", snapshot => {
        dispatch({
            type: 'FETCH_PERSONS',
            payload: snapshot.val()
        });
    });
};
