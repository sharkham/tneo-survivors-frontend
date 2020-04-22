const baseURL = "http://localhost:3000/api/v1"

//synchronous action creators

export const addBadge = badge => {
  return {
    type: "ADD_BADGE",
    badge
  }
}

// export const setBadges = badges => {
//   return {
//     type: "SET_BADGES",
//     badges
//   }
// }

//asynchronous action creators

export const createBadge = (badge, novel) => {
  return dispatch => {
    return fetch(`${baseURL}/novels/${novel.id}/badges`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(badge)
    })
    .then(res => res.json())
    .then(badge => {
      if (badge.error) {
        alert(badge.error)
      } else {
        dispatch(addBadge(badge))
      }
    })
    .catch(console.log)
  }
}

// export const getBadges = (novel) => {
//   console.log("get badges")
//   return dispatch => {
//     return fetch(`${baseURL}/novels/${novel.id}/badges`, {
//       credentials: "include",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     .then(res => res.json())
//     .then(badges => {
//       // if (!!findCurrentNovel(novels))
//       //   dispatch(setCurrentNovel(findCurrentNovel(novels)))
//       // else {
//       //   console.log(novels.error)
//       // }
//       console.log(badges)
//       // dispatch(setBadges(badges))
//     })
//     .catch(console.log)
//   }
// }
