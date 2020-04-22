const baseURL = "http://localhost:3000/api/v1"

//sync methods
export const setCurrentNovel = novel => {
  return {
    type: "SET_CURRENT_NOVEL",
    novel
  }
}

export const updateWordCount = novel => {
  return {
    type: "UPDATE_CURRENT_NOVEL_WORDCOUNT",
    novel
  }
}

//async methods
export const getNovel = user => {
  console.log("getNovel")
  return dispatch => {
    return fetch(`${baseURL}/users/${user.id}/novels`, {
      //grab the user, get the novel where the novel year matches current year.
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
      //body: JSON.stringify({username: "marysue1", password: "password"})
    })
    .then(res => res.json())
    .then(novels => {
      if (!!findCurrentNovel(novels))
        dispatch(setCurrentNovel(findCurrentNovel(novels)))
      else {
        console.log(novels.error)
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

export const patchWordCount = novel => {
  console.log("patching word count")
  return dispatch => {
    return fetch(`${baseURL}/novels/${novel.id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novel)
    })
    .then(res => res.json())
    .then(novel => {
      if (novel.error) {
        alert(novel.error)
      } else {
        dispatch(updateWordCount(novel))
      }
    })
  }
}

//helpers
const findCurrentNovel = novels => {
  const currentYear = new Date().getFullYear()
  if (!!novels.find(novel => novel.year === currentYear)) {
    return novels.find(novel => novel.year === currentYear)
  }
}
