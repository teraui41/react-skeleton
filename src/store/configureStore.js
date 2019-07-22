import rootReducer from '../reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const configureStore = () => {
  const middlewares =[];

  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
}

export default configureStore;
