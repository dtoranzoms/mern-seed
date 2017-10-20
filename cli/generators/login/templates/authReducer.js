import * as actionTypes from '../actions/actionTypes';

import initialState from './initialState';

export const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return Object.assign(
        {},
        state,
        { loggingIn: action.loggingIn, invalidUser: false }
      );
    case actionTypes.LOGIN_SUCCESS:
      return Object.assign(
        {},
        state,
        { loggingIn: action.loggingIn, loggedIn: true }
      );
    case actionTypes.LOGIN_ERROR:
      return Object.assign(
        {},
        state,
        { loggingIn: action.loggingIn, invalidUser: true }
      );
    case actionTypes.LOGIN_CLEAR_INVALID_USER:
      return Object.assign(
        {},
        state,
        { invalidUser: false }
      );
    case actionTypes.SIGNUP_REQUEST:
      return Object.assign(
        {},
        state,
        { signingUp: action.signingUp, signUpError: false }
      );
    case actionTypes.SIGNUP_SUCCESS:
      return Object.assign(
        {},
        state,
        { signingUp: action.signingUp }
      );
    case actionTypes.SIGNUP_ERROR:
      return Object.assign(
        {},
        state,
        { signingUp: action.signingUp, signUpError: true }
      );
    default:
      return state;
  }
};