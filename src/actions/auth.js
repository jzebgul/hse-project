import firebase from '../firebase/firebase';
import { history } from '../component/App';
export const login = (user) => ({
    type: 'LOGIN',
    user
});

export const startLogin = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password)

    };
};

export const startRegister = (email, password) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((currentUser) => {
                // Signed in
                var user = currentUser;
                console.log(user);
                history.push('/dashboard')
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

