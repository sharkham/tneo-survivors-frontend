// import manageRestaurants from './manageRestaurant'
// import manageReviews from './manageReview'
import { combineReducers } from 'redux'
import users from './users'
import allCurrentNovels from './allCurrentNovels'
// import badges from './badges'
import badgetypes from './badgetypes'
import currentUser from './currentUser'
import currentNovel from './currentNovel'

const rootReducer = combineReducers({
  users,
  currentUser,
  allCurrentNovels,
  currentNovel,
  // badges,
  badgetypes
  // restaurants: manageRestaurants,
  // reviews: manageReviews
})

export default rootReducer;
