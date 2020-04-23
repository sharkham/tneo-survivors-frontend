// import { getNovel } from './currentNovel'
import { getNovels } from './novels'

const baseURL = "http://localhost:3000/api/v1/"

//synchronous action creators

//for this action we have a user object in hand
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

//this deals with clearing user out of Redux store
export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}


//asynchronous action creators
export const login = credentials => {
  return dispatch => {
    return fetch(`${baseURL}/login`, {
      //still creating something--creating a session, that's why it's a POST
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
      //body: JSON.stringify({username: "marysue1", password: "password"})
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch(getNovels(user))
      }
    })
    .catch(console.log)
  }
}

export const signup = credentials => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    console.log(userInfo)
    return fetch(`${baseURL}/signup`, {
      //still creating something--creating a session, that's why it's a POST
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
      //body: JSON.stringify({username: "marysue1", password: "password"})
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch(getNovels(user))
      }
    })
    .catch(console.log)
  }
}

//this clears session
export const logout = () => {
  return dispatch => {
    //logging them out immediately on front end
    dispatch(clearCurrentUser())
    return fetch(`${baseURL}/logout`, {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch(`${baseURL}/get_current_user`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        //dealing with the front end thing
        dispatch(setCurrentUser(user))
        dispatch(getNovels(user))
      }
    })
    .catch(console.log)
  }
}
