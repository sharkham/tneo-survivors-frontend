export default function currentNovel(state = null, action) {
  switch (action.type) {
    case 'SET_CURRENT_NOVEL':
      return action.novel
    case 'ADD_NOVEL':
      return action.novel
    case 'UPDATE_NOVEL':
      return action.novel
    case 'ADD_BADGE':
      return {
        ...state,
        badges: [...state.badges, action.badge]
      }
    case 'DELETE_BADGE':
      return {
        ...state,
        badges: state.badges.filter(badge => badge.id !== action.badgeId)
      }
    case 'CLEAR_CURRENT_USER':
      return null
    case 'UPDATE_CURRENT_NOVEL_WORDCOUNT':
      return action.novel
    default:
      return state
  }

}
