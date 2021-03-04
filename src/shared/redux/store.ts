import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import reducer, { IRootState } from './reducer';
import DevTools from './devtools';

const defaultMiddlewares = [
    thunkMiddleware,
];

const devMiddlewares = [
    loggerMiddleware,
];

const composedMiddlewares = (middlewares: any) =>
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(...defaultMiddlewares, ...middlewares, ...devMiddlewares), DevTools.instrument())
    : compose(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initialize = (initialState?: IRootState, middlewares = []) => createStore(reducer, initialState, composedMiddlewares(middlewares));


export default initialize;