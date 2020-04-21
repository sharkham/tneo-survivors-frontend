export default function novels(state = [], action) {
  switch (action.type) {
    case 'ADD_NOVEL':
      return [...state, action.novel]
    default:
      return state
  }

}
