import { UPDATE_FRIENDS, FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

const initialState = {
    friends: [],
    isFetching: false,
    error: ''
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START):
            return ({
                ...state,
                friends: [],
                isFetching: true,
                error: ''
            });
        case (FETCH_SUCCESS):
            return ({
                ...state,
                friends: action.payload,
                isFetching: false,
                error: ''
            });
        case (FETCH_FAIL):
            return ({
                ...state,
                friends: [],
                isFetching: false,
                error: action.payload
            })
        case (UPDATE_FRIENDS):
            return ({
                ...state,
                friends: action.payload,
                isFetching: false,
                error: ''
            });
        default:
            return state;
    }
}