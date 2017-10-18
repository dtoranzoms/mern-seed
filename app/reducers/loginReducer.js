import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actionTypes';
import initialState from './initialState';

export const login = (state = initialState.login, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign(
        {},
        state,
        { loggingIn: action.payload.loggingIn }
      );
    case LOGIN_SUCCESS:
      return Object.assign(
        {},
        state,
        { loggingIn: action.payload.loggingIn, loggedIn: true }
      );
    case LOGIN_ERROR:
      return Object.assign(
        {},
        state,
        { loggingIn: action.payload.loggingIn, invalidUser: true }
      );

    default:
      return state;
  }
};
