// create seperate reuducers based on the design, like modals
// that state is in redux and that modal can be opened anywhere


// a higher order component is like connect
// it returns a new component  a component that wraps another component
import { createStore } from './redux';
import rootReducer from './reducers';

export const store = createStore(
  rootReducer
  );
