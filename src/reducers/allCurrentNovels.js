export default function allCurrentNovels(state = [], action) {
  switch (action.type) {
    case 'ADD_NOVEL':
      return [...state, action.novel]
    case 'UPDATE_NOVEL':
      return state.map(novel => {
        if (novel.id === action.novel.id) {
          return {
            ...novel,
            title: action.novel.title,
            summary: action.novel.summary,
            plan: action.novel.plan,
            goal: action.novel.goal,
            wordcount: action.novel.wordcount
          };
        } else {
          return novel;
        }
      })
    case 'ADD_BADGE':
      return state.map(novel => {
        if (novel.id === action.badge.novel_id) {
          return {
            ...novel,
            badges: [...novel.badges, action.badge]
          };
        } else {
          return novel;
        }
      })
    case 'DELETE_BADGE':
      return state.map(novel => {
        if (novel.badges.find(badge => badge.id === action.badgeId)) {
          return {
            ...novel,
            badges: novel.badges.filter(badge => badge.id !== action.badgeId)
          };
        } else {
          return novel;
        }
      })
    case 'UPDATE_CURRENT_NOVEL_WORDCOUNT':
      return state.map(novel => {
        if (novel.id === action.novel.id) {
          return {
            ...novel,
            wordcount: action.novel.wordcount
          };
        } else {
          return novel;
        }
      })
    case 'SET_OTHER_NOVELS':
      return [...state, ...action.novels]
    case 'CLEAR_CURRENT_USER':
      return []
    default:
      return state
  }

}
