import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import tasks from '../reducers/formReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            tasks: tasks
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
export default store;