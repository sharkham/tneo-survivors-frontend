export default function badges(state = [], action) {
  switch (action.type) {
    case 'ADD_BADGE':
      return [...state, action.badge]
    default:
      return state
  }

}
