export default function otherUserNovels(state = [], action) {
  switch (action.type) {
    case 'SET_OTHER_USER_NOVELS':
      return action.novels
    default:
      return state
  }

}
