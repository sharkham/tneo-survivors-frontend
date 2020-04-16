export default function novels(state = [], action) {
  switch (action.type) {
    case 'ADD_NOVEL':
      return {
        ...state
      }
    default:
      return state
  }

}
