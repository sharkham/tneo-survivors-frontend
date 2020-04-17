export default function currentNovel(state = null, action) {
  switch (action.type) {
    case 'SET_CURRENT_NOVEL':
      return action.novel
    case 'CLEAR_CURRENT_USER':
      return null
    default:
      return state
  }

}
