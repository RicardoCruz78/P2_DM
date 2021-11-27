import React from 'react';
import Navegar from './navigation/Navegar';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import ContactReducers from './store/ContactReducers';

import { Provider } from 'react-redux';







const rootReducer = combineReducers ({
  contatos: ContactReducers
});

const store = createStore (rootReducer, applyMiddleware (reduxThunk));

export default function App () {
  return (
    <Provider store={store}>
      <Navegar />
    </Provider>
    
  );
}