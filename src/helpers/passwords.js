import { getCurrentUser } from '../actions/currentUser'

const baseURL = process.env.REACT_APP_BASE_API_URL

export const forgotPassword = (email) => {
  return fetch(`${baseURL}/forgot_password`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(email)
  })
  .then(res => res.json())
  .then(response => {
    alert(response.alert)
  })
  // .then(() => {
  //   console.log("do the redirect here? Or just nothing?")
  // })
  .catch(console.log)
}

export const resetPassword = (credentials) => {
  return dispatch => {
    return fetch(`${baseURL}/reset_password`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(user => {
      if (!!user.error) {
        alert(user.error)
      } else {
        //possibly this needs to be done as a dispatch!
        alert(user.alert)
        dispatch(getCurrentUser())
      }
    })
    .catch(console.log)
  }
}
