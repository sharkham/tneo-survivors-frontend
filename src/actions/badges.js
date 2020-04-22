const baseURL = "http://localhost:3000/api/v1"

//synchronous action creators

export const addBadge = badge => {
  return {
    type: "ADD_BADGE",
    badge
  }
}

export const deleteBadge = badgeId => {
  return {
    type: "DELETE_BADGE",
    badgeId
  }
}

//asynchronous action creators

export const createBadge = (badge, novel) => {
  const badgeObj = {
    name: badge.name,
    description: badge.description,
    emoji: badge.emoji,
    badgetype_id: badge.id
  }
  return dispatch => {
    return fetch(`${baseURL}/novels/${novel.id}/badges`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(badgeObj)
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

export const destroyBadge = badgeId => {
  return dispatch => {
    return fetch(`${baseURL}/badges/${badgeId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      dispatch(deleteBadge(badgeId))
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
