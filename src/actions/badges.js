const baseURL = "http://localhost:3000/api/v1"

//synchronous action creators

// export const setBadges = badges => {
//   return {
//     type: "SET_BADGES",
//     badges
//   }
// }

//asynchronous action creators

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
