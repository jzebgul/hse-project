import {firebase} from '../firebase/firebase';
import 'firebase/auth';
import 'firebase/firestore';
import auth from 'firebase/app'
import { history } from '../component/App';
import {browserHistory} from '../index';

export const clearTasks = () => ({
    type: 'CLEAR_TASKS'
});
