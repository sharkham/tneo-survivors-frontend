import { combineReducers } from 'redux'
import users from './users'
import allCurrentNovels from './allCurrentNovels'
import badgetypes from './badgetypes'
import currentUser from './currentUser'
import currentNovel from './currentNovel'
import otherUserNovels from './otherUserNovels'

const rootReducer = combineReducers({
  users,
  currentUser,
  allCurrentNovels,
  currentNovel,
  otherUserNovels,
  badgetypes
})

export default rootReducer;
