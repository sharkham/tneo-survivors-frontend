//sync methods
export const setCurrentNovel = novel => {
  return {
    type: "SET_CURRENT_NOVEL",
    novel
  }
}

//async methods
export const getNovel = user => {
  console.log("test")
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      //grab the user, get the novel where the novel year matches current year.
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
      //body: JSON.stringify({username: "marysue1", password: "password"})
    })
    .then(res => res.json())
    .then(user => {
      if (!!findCurrentNovel(user))
        dispatch(setCurrentNovel(findCurrentNovel(user)))
      else {
        alert(user.error)
      }
      // if (novel.error) {
      //   alert(novel.error)
      // } else {
      //   dispatch(setCurrentNovel(novel))
      // }
    })
    .catch(console.log)
  }
}

//helpers
const findCurrentNovel = user => {
  const currentYear = new Date().getFullYear()
  if (!!user.novels.find(novel => novel.year === currentYear)) {
    return user.novels.find(novel => novel.year === currentYear)
  }
}
