// import { getNovel } from './currentNovel'

const baseURL = "http://localhost:3000/api/v1"

//synchronous action creators

export const addNovel = novel => {
  return {
    type: "ADD_NOVEL",
    novel
  }
}

export const updateNovel = novel => {
  return {
    type: "UPDATE_NOVEL",
    novel
  }
}

export const updateWordCount = novel => {
  return {
    type: "UPDATE_CURRENT_NOVEL_WORDCOUNT",
    novel
  }
}

export const setCurrentNovel = novel => {
  return {
    type: "SET_CURRENT_NOVEL",
    novel
  }
}

export const setOtherUserNovels = novels => {
  return {
    type: "SET_OTHER_USER_NOVELS",
    novels
  }
}

export const setOtherNovels = novels => {
  return {
    type: "SET_OTHER_NOVELS",
    novels
  }
}

//asynchronous action creators

export const createNovel = (novel, user) => {
  return dispatch => {
    return fetch(`${baseURL}/users/${user.id}/novels`, {
      credentials: "include",
      method: "POST",
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
        dispatch(addNovel(novel))
        // dispatch(getNovel(novel))
      }
    })
    .catch(console.log)
  }
}

export const patchNovel = (novel) => {
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
        dispatch(updateNovel(novel))

        // dispatch(getNovel(novel))
      }
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


export const getNovels = user => {
  // console.log("getNovel")
  return dispatch => {
    return fetch(`${baseURL}/novels`, {
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
      if (!!findCurrentNovel(novels, user)) {
        dispatch(setCurrentNovel(findCurrentNovel(novels, user)))
      }
      if (!!findOtherUserNovels(novels, user)) {
        dispatch(setOtherUserNovels(findOtherUserNovels(novels, user)))
      }
      if (!!findAllCurrentNovels(novels, user)) {
        dispatch(setOtherNovels(findAllCurrentNovels(novels, user)))
      }
    })
    .catch(console.log)
  }
}

//helpers
const findCurrentNovel = (novels, user) => {
  const currentYear = new Date().getFullYear()
  if (!!novels.find(novel => novel.year === currentYear && novel.user_id === user.id)) {
    return novels.find(novel => novel.year === currentYear && novel.user_id === user.id)
  }
}

const findOtherUserNovels = (novels, user) => {
  const currentYear = new Date().getFullYear()
  if (!!novels.find(novel => novel.year !== currentYear && novel.user_id === user.id)) {
    return novels.filter(novel => novel.year !== currentYear && novel.user_id === user.id)
  }
}

const findAllCurrentNovels = (novels, user) => {
  const currentYear = new Date().getFullYear()
  if (!!novels.find(novel => novel.year === currentYear)) {
    return novels.filter(novel => novel.year === currentYear)
  }
}
