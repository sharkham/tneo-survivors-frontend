// import { getNovel } from './currentNovel'

const baseURL = "http://localhost:3000/api/v1"

//synchronous action creators

export const addNovel = novel => {
  return {
    type: "ADD_NOVEL",
    novel
  }
}

export const editNovel = novel => {
  return {
    type: "EDIT_NOVEL",
    novel
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
