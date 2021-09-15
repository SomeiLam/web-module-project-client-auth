import { LOGIN, LOGOUT } from "../actions";

let initialState = {
    isLogin: false
}

if (localStorage.getItem("token")) {
    initialState = {
        isLogin: true
    }
}


export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isLogin: action.payload
            }
        default: 
            return state;
    };
}
