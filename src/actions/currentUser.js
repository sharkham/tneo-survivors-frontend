//synchronous action creators

//for this action we have a user object in hand
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}


//asynchronous action creators
export const login = credentials => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
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
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
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
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}
