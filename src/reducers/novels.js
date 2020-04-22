export default function novels(state = [], action) {
  switch (action.type) {
    case 'ADD_NOVEL':
      return [...state, action.novel]
    case 'UPDATE_NOVEL':
      return state.map(novel => {
        if (novel.id === action.novelId) {
          return {
            ...novel,
            title: action.payload.title,
            summary: action.payload.summary,
            plan: action.payload.plan,
            goal: action.payload.goal
          };
        } else {
          return novel;
        }
      })
    default:
      return state
  }

}
