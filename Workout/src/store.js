// create seperate reuducers based on the design, like modals
// that state is in redux and that modal can be opened anywhere

import { createStore } from './redux';
import rootReducer from './reducers';

export const store = createStore(
  rootReducer
  );
