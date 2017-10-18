import { push } from 'react-router-redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes';
import loginService from '../services/loginService';

function loginRequest () {
  return {
    type: LOGIN_REQUEST,
    payload: {
      loggingIn: true
    }
  };
}

function loginSuccess () {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      loggingIn: false
    }
  };
}

function loginError () {
  return {
    type: LOGIN_ERROR,
    payload: {
      loggingIn: false
    }
  };
}

export function login(formData) {
  return (dispatch, getState) => {
    dispatch(loginRequest());
    return loginService.login(formData)
      .then(response => {
        /*  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!', response);
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!', response.token);
        if (response.status !== 200) {
          dispatch(loginError());
        }
        else {*/
          sessionStorage.setItem('token', response.token);
          dispatch(loginSuccess());
          dispatch(push('/app/home'));
        //}
      })
      .catch(() => {
        dispatch(loginError());
      }); 
  };
}