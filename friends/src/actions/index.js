import axiosWithAuth from './../utils/axiosWithAuth';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const UPDATE_FRIENDS = 'UPDATE_FRIENDS';

export const getFriends = () => dispatch => {
    dispatch(fetchStart());
    axiosWithAuth()
        .get('/friends')
        .then(res => {
            dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        })
}

export const updateNewFriend = (friends) => dispatch => {
    dispatch(updateFriends(friends));
}

export const fetchStart = () => ({ type: FETCH_START });

export const fetchSuccess = (friends) => {
    return ({ type: FETCH_SUCCESS, payload: friends });
}

export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
}

export const login = () => {
    return ({ type: LOGIN, payload: true });
}

export const logout = () => {
    return ({ type: LOGOUT, payload: false });
}


export const updateFriends = (friends) => {
    return ({ type: UPDATE_FRIENDS, payload: friends });
}