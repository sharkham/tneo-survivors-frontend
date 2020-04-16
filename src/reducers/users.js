export default function users(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state
      }
    default:
      return state
  }

}
