const initialState = {users: []};

function addUser(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
    case "ADD_USER":
        nextState = {
            ...state,
            users: [...state.users, action.value]
        };    
        return nextState || state;

    case "REMOVE_USER":
        nextState = {
            ...state,
            users: state.users.filter((u) => u !== action.value)
        };    
        return nextState || state;

    default:
        return state;
    }
}

export default addUser;