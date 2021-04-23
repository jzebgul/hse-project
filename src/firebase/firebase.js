import app from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import "firebase/database"

var firebaseConfig = {
    apiKey: "AIzaSyAM7bXNJc-BlyLjUK23laYxDXSdqrg5m0A",
    authDomain: "hse-project-aefd3.firebaseapp.com",
    databaseURL: "https://hse-project-aefd3-default-rtdb.firebaseio.com",
    projectId: "hse-project-aefd3",
    storageBucket: "hse-project-aefd3.appspot.com",
    messagingSenderId: "651568614628",
    appId: "1:651568614628:web:2d0e91e352bbe6ef6970f1"
};

const firebase = app.initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = firebase.database();

export default firebase;