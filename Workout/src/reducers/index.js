// combine all reducers place all modules into index.js and export that
// this index.js pattern is practical and common
import { user } from './user';
import { exercises } from './exercises';
import { ui } from './ui';
import { currentWorkout } from './currentWorkout';
import { categories } from './categories';
import { combineReducers } from './ redux';

export default combineReducers({
  user,
  exercises,
  ui,
  currentWorkout,
  categories
});
