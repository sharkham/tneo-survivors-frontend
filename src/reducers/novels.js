export default function novels(state = [], action) {
  switch (action.type) {
    case 'ADD_NOVEL':
      return
        action.novel
    default:
      return state
  }

}
