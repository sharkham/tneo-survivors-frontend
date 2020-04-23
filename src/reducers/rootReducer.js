// import manageRestaurants from './manageRestaurant'
// import manageReviews from './manageReview'
import { combineReducers } from 'redux'
import users from './users'
import allCurrentNovels from './allCurrentNovels'
// import badges from './badges'
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
  // badges,
  badgetypes
  // restaurants: manageRestaurants,
  // reviews: manageReviews
})

export default rootReducer;
