import {
    createStore, applyMiddleware,
  } from 'redux';
  
  //import promiseMiddleware from "redux-promise";
  
  import thunk from 'redux-thunk';
  
  
  import reducers from './../reducers/reducers';
  
  const middleware = applyMiddleware(thunk);
  const store = createStore(reducers,initialState,middleware);
  
  export default store;
  