import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import personsReducer from '../reducers/personsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            persons: personsReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
export default store;