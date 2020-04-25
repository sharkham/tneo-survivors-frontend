import { combineReducers } from 'redux'
import allCurrentNovels from './allCurrentNovels'
import badgetypes from './badgetypes'
import currentUser from './currentUser'
import currentNovel from './currentNovel'
import otherUserNovels from './otherUserNovels'

const rootReducer = combineReducers({
  currentUser,
  allCurrentNovels,
  currentNovel,
  otherUserNovels,
  badgetypes
})

export default rootReducer;
