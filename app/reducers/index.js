import {
  users,
  user,
  savingUser,
  userToDelete
} from './userReducer';
import { combineReducers } from 'redux';
import { modal } from './modalReducer';
import { alert } from './alertReducer';
import { login } from './loginReducer';
const rootReducer = combineReducers({
    modal,
    alert,
    login,
    users,
    user,
    savingUser,
    userToDelete
});
export default rootReducer;
