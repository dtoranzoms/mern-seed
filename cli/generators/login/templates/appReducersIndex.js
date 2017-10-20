import {
  users,
  user,
  savingUser,
  userToDelete
} from './userReducer';
import { combineReducers } from 'redux';
import { modal } from './modalReducer';
import { alert } from './alertReducer';
import { auth } from './authReducer';
const rootReducer = combineReducers({
    modal,
    alert,
    auth,
    users,
    user,
    savingUser,
    userToDelete
});
export default rootReducer;