import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import reducer from './reducer'; 

const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

const initialize = () => createStore(reducer,
    applyMiddleware(...middleware)
);

export default initialize;