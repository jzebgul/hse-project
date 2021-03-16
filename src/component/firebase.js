import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KE,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}
console.log(config)
const firebase = app.initializeApp(config)
export default firebase;    