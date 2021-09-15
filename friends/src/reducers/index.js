import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { friendsReducer } from './friendsReducer';

export default combineReducers({
    loginReducer,
    friendsReducer
});
