// 1. create the store with a Provider
// wrapping in the Welcome page

import React from 'react';
import { Welcome } from './containers';
import { Provider } from './react-redux';
import { store } from './store';

export const Root = () => (
  <Provider store={store}>
    <Welcome />
  </Provider>
  );
