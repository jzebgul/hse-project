//TASK REDUCER
import { omit } from 'lodash'

const persons = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return { ...state, [action.payload.id]: action.payload }


        case 'REMOVE_PERSON':
            return omit(state, action.id)


        case 'FETCH_PERSONS':
            return action.payload;


        default:
            return state
    }
};

export default persons;
