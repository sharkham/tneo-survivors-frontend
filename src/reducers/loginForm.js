const initialState = {
  username: "",
  password: ""
}

export default function loginForm(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.user
    default:
      return state
  }

}
