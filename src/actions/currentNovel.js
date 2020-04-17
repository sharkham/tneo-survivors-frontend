//sync methods
export const setCurrentNovel = novel => {
  return {
    type: "SET_CURRENT_NOVEL",
    novel
  }
}

//async methods
export const getNovel = novel => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/novels/${novel.id}`, {
      //still creating something--creating a session, that's why it's a POST
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novel)
      //body: JSON.stringify({username: "marysue1", password: "password"})
    })
    .then(res => res.json())
    .then(novel => {
      if (novel.error) {
        alert(novel.error)
      } else {
        dispatch(setCurrentNovel(novel))
      }
    })
    .catch(console.log)
  }
}
