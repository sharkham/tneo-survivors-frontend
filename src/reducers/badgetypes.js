export default function badgetypes(state = [], action) {
  switch (action.type) {
    case 'SET_BADGETYPES':
      return action.badgetypes
    default:
      return state
  }

}
