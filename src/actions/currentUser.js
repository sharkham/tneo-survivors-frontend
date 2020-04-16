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
    return fetch("http://localhost:3000/api/v1/login", {
      //still creating something--creating a session, that's why it's a POST
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
      //body: JSON.stringify({username: "marysue1", password: "password"})
    })
  }
}
