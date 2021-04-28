//TASK REDUCER
import { omit } from 'lodash'

const tasks = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TASKS':
            return { ...state, [action.payload.id]: action.payload }


        case 'COMPLETE_TASK':
            return { ...state, [action.payload.id]: action.payload }


        case 'REMOVE_TASK':
            return omit(state, action.id)


        // return {...state, items: omit(state, action.id)}
        case 'SET_TASKS':
            return action.tasks;

        case 'CLEAR_TASKS':
            return {};


        default:
            return state


    }
};

export default tasks
