export default function(state = {
    Login: null,
}, action) {
    console.log(action);

    if (action.type === 'LOGIN_PENDING') {
        let newState = Object.assign({}, state);
        newState.Login = { processing: true };
        return newState;
    } else if (action.type === 'LOGIN_FULFILLED') {
        let newState = { Login: {} };
        newState.Login.token = action.payload.data.token;
        newState.Login.failed = null;
        newState.Login.processing = false;
        return newState;
    } else if (action.type === "LOGIN_REJECTED") {
        let newState = {...state, Login: {} };
        newState.Login.processing = false;
        newState.Login.failed = action.payload;
        newState.Login.token = null;
        return newState;
    } else {
        console.log('Unknown action ' + action.type);
        return state;
    }
}
