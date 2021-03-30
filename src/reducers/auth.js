import firebase from '../component/firebase';
const authReducer = (state, action) => {
    if (action.type === 'USER_LOGIN') {
        const userLogin = ({ email, password, props }) => {
            try {
                firebase.auth().signInWithEmailAndPassword(email, password)
                props.history.push('/dashboard')
            } catch (error) {
                console.error(error)
            }
            return {
                ...state
            }
        }
    }
}
export default authReducer;