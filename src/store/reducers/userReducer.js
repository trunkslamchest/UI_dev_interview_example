import * as actionTypes from '../actions/actionTypes'

const initialStore = {
  error: false,
  isLoggedIn: false,
  user: null,
  users: null
}

const createUser = (currentStore, action) => {
  return {
    ...currentStore,
    isLoggedIn: action.isLoggedIn,
    user: action.userOBJ
  }
}

const updateUser = (currentStore, action) => {
  return {
    ...currentStore,
    user: action.userOBJ
  }
}

const getUser = (currentStore, action) => {
  return {
    ...currentStore,
    isLoggedIn: action.isLoggedIn,
    user: action.user
  }
}

const clearUser = (currentStore, action) => {
  return {
    ...currentStore,
    isLoggedIn: action.isLoggedIn,
    user: action.user
  }
}

const getUsers = (currentStore, action) => {
  let userNames = action.users.map(user => { return user.userName })
  return {
    ...currentStore,
    users: userNames
  }
}

const setError = (currentStore, action) => {
  return {
    ...currentStore,
    error: action.error
  }
}

const userReducer = (currentStore = initialStore, action) => {
  switch(action.type) {
    case(actionTypes.CREATE_USER): return createUser(currentStore, action)
    case(actionTypes.UPDATE_USER): return updateUser(currentStore, action)
    case(actionTypes.GET_USER): return getUser(currentStore, action)
    case(actionTypes.CLEAR_USER): return clearUser(currentStore, action)
    case(actionTypes.GET_USERS): return getUsers(currentStore, action)
    case(actionTypes.SET_ERROR): return setError(currentStore, action)
    default: return currentStore
  }
}

export default userReducer