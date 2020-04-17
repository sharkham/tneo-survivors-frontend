// import manageRestaurants from './manageRestaurant'
// import manageReviews from './manageReview'
import { combineReducers } from 'redux'
import users from './users'
import novels from './novels'
import badges from './badges'
import currentUser from './currentUser'
import currentNovel from './currentNovel'

const rootReducer = combineReducers({
  users,
  currentUser,
  novels,
  currentNovel,
  badges
  // restaurants: manageRestaurants,
  // reviews: manageReviews
})

export default rootReducer;
