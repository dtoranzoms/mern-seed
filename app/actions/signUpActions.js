import { push } from 'react-router-redux';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './actionTypes';
import signUpService from '../services/signUpService';

function signUpRequest () {
  return {
    type: SIGNUP_REQUEST,
    signingUp: true
  };
}

function signUpSuccess () {
  return {
    type: SIGNUP_SUCCESS,
    signingUp: false
  };
}

function signUpError () {
  return {
    type: SIGNUP_ERROR,
    signingUp: false
  };
}

export function signUp(formData) {
  return (dispatch, getState) => {
    dispatch(signUpRequest());
    return signUpService.signUp(formData)
      .then(response => {
        dispatch(signUpSuccess());
        dispatch(push('/app'));
      })
      .catch(() => {
        dispatch(signUpError());
      });
  };
}