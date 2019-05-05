import * as types from '../actionTypes';
import history from '../../utils/history';
import UserFetch from '../../service/user';

export const login = (payload) => ({
  type: types.LOGIN,
  payload,
})

export const logout = () => ({
  type: types.LOGOUT,
})

export const loginFn = (username, password) => {
  return async dispatch => {
    const res = await UserFetch.login({ username, password })
    if (res.success) {
      dispatch(login({
        username: username,
        token: res.data.token,
      }));
      localStorage.setItem('username', username);
      localStorage.setItem('token', res.data.token);
      history.push('/');
    }
  }
}

export const logoutFn = () => {
  return async dispatch => {
    const res = await UserFetch.logout();
    if (res.success) {
      dispatch(logout())
      localStorage.clear();
      history.push('/login');
    }
  }
}

export const clearToken = () => {
  return dispatch => {
    dispatch(logout())
    localStorage.clear();
    history.push('/login');
  }
}

