import firebase from '../firebase/firebase';
//import { history } from '../component/App';
export const login = (user) => ({
    type: 'LOGIN',
    user
});

export const startLogin = (email, password) => {
    return () => {

        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // history.push('/dashboard');
            });

    };
};

export const startRegister = (name, email, password) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((currentUser) => {
                // Signed in
                const user = firebase.auth().currentUser;

                user.updateProfile({
                    displayName: name,
                }).then(function () {
                    console.log('Updated');
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

