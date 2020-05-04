const baseURL = "http://localhost:3000/api/v1"

export const forgotPassword = (email) => {
  console.log("forgotPassword firing!")
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

export const resetPassword = (passwordObj) => {
  console.log("resetPassword firing!")
  return fetch(`${baseURL}/reset_password`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(passwordObj)
  })
  .then(res => res.json())
  .then(response => {
    if (!!response.error) {
      alert(response.error)
    } else if (!!response.alert) {
      alert(response.alert)
    }
    // alert(response.error)
  })
  // .then(() => {
  //   console.log("do the redirect here? Or just nothing?")
  // })
  .catch(console.log)
}
