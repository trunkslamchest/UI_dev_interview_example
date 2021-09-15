import * as actionTypes from './actionTypes'

import fetchFunctions from '../../utility/fetchFunctions'

export const createUser = (obj) => {
  return dispatch => {
    fetchFunctions('post', 'http://localhost:3001/users', obj)
    .then(res => { return dispatch(setCreatedUser(res)) })
  }
}

export const updateUser = (userOBJ) => {
  return dispatch => {
    fetchFunctions('patch', `http://localhost:3001/users/${userOBJ.id}`, userOBJ)
    .then(res => { return dispatch(setUpdatedUser(res)) })
  }
}

const setUpdatedUser = (res) => {
  return {
    type: actionTypes.UPDATE_USER,
    userOBJ: res
  }
}


const setCreatedUser = (res) => {
  return {
    type: actionTypes.CREATE_USER,
    isLoggedIn: true,
    userOBJ: res
  }
}

export const getUser = (userOBJ) => {
  return dispatch => {
    fetchFunctions('get', `http://localhost:3001/users?userName=${userOBJ.userName}`)
    .then(res => {
      if(res.length === 0) dispatch(setError('User Name is Invalid'))
      else {
        if(res[0].password !== userOBJ.password) dispatch(setError('Password is Incorrect'))
        else dispatch(setUser(res[0]))
      }
    })
  }
}

const setUser = (res) => {
  return {
    type: actionTypes.GET_USER,
    isLoggedIn: true,
    user: res
  }
}

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER,
    isLoggedIn: false,
    user: null
  }
}

export const getUsers = () => {
  return dispatch => {
    fetchFunctions('get', 'http://localhost:3001/users')
    .then(res => dispatch(setUsers(res)))
  }
}

const setUsers = (res) => {
  return {
    type: actionTypes.GET_USERS,
    users: res
  }
}

export const setError = (errorMSG) => {
  return {
    type: actionTypes.SET_ERROR,
    error: errorMSG
  }
}
