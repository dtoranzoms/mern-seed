import { push } from 'react-router-redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_CLEAR_INVALID_USER } from './actionTypes';
import loginService from '../services/loginService';

function loginRequest () {
  return {
    type: LOGIN_REQUEST,
    loggingIn: true
  };
}

function loginSuccess () {
  return {
    type: LOGIN_SUCCESS,
    loggingIn: false
  };
}

function loginError () {
  return {
    type: LOGIN_ERROR,
    loggingIn: false
  };
}

function loginClearInvalidUser() {
  return {
    type: LOGIN_CLEAR_INVALID_USER
  };
}

export function clearInvalidUser(formData) {
  return (dispatch, getState) => {
    dispatch(loginClearInvalidUser());
  };
}

export function login(formData) {
  return (dispatch, getState) => {
    dispatch(loginRequest());
    return loginService.login(formData)
      .then(response => {
        localStorage.setItem('token', response.token);
        dispatch(loginSuccess());
        dispatch(push('/app/home'));
      })
      .catch(() => {
        dispatch(loginError());
      }); 
  };
} 