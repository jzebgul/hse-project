const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.user.uid,
                name: action.user.displayName,
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }

};
export default reducer;