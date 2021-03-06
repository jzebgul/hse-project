import {firebase} from '../firebase/firebase';
import 'firebase/auth';
import 'firebase/firestore';
import auth from 'firebase/app'
import { history } from '../component/App';
import {browserHistory} from '../index';

export const login = (user) => ({
    type: 'LOGIN',
    user
});

export const startLogin = (email, password) => {
    //const { email, password } = props
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            // browserHistory.push('/dashboard');
        });
    };
};

export const startRegister = (name, email, password) => {
    // const { name, email, password } = props
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((currentUser) => {
                // Signed in
                const user = firebase.auth().currentUser;

                user.updateProfile({
                    displayName: name,
                }).then(function () {
                    console.log('Updated User');
                    // Update successful.
                }).catch(function (error) {
                    // An error happened.
                    console.log(error);
                });

                // history.push('/dashboard')
                // ...
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();

    };
};

