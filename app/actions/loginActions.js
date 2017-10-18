import { push } from 'react-router-redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes';

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

const loginUser = (user) => { 
  //TODO: invoke API here for proper login, this is just a fake login,
  //this should be done using a service like userService.
  //It should return us a token so when can keep track of the user session.
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      if(user.username === 'admin' && user.password === '1234') {
        resolve();
      }
      else {
        reject();
      }
    }, 3000);
  });
};

export function login(user) {
  return (dispatch, getState) => {
    dispatch(loginRequest());
    return loginUser(user)
      .then(() => {
        dispatch(loginSuccess());
        dispatch(push('/app/home'));
      })
      .catch(() => {
        dispatch(loginError());
      }); 
  };
}