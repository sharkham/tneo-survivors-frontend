export default function novels(state = [], action) {
  switch (action.type) {
    case 'SET_CURRENT_NOVEL':
      return action.novel
    default:
      return state
  }

}
