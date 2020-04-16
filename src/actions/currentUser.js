//synchronous action creators

//for this action we have a user object in hand
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    payload: user
  }
}


//asynchronous action creators
export const login = credentials => {
  return dispatch => {
    return fetch()
  }
}
