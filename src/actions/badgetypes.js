const baseURL = "http://localhost:3000/api/v1"

//synchronous action creators

export const setBadgetypes = badgetypes => {
  return {
    type: "SET_BADGETYPES",
    badgetypes
  }
}

//asynchronous action creators

export const getBadgetypes = () => {
  console.log("get badgetypes")
  return dispatch => {
    return fetch(`${baseURL}/badgetypes`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(badgetypes => {
      // if (!!findCurrentNovel(novels))
      //   dispatch(setCurrentNovel(findCurrentNovel(novels)))
      // else {
      //   console.log(novels.error)
      // }
      console.log(badgetypes)
      // dispatch(setBadgetypes(badgetypes))
    })
    .catch(console.log)
  }
}
