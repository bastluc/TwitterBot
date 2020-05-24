const initialState = {users: ["frbertel", "bast_lucas", "Raimy_Gdr"]};

function addUser(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
    case "ADD_USER":
        nextState = {
            ...state,
            users: [...state.users, action.value]
        };    
        return nextState || state;

    default:
        return state;
    }
}

export default addUser;