import * as Redux from 'redux';
import reducer from '../reducers/reducer.js';
import thunk from 'redux-thunk';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

if (!reduxDevtools) {
   module.exports = Redux.createStore(reducer, Redux.applyMiddleware(thunk));
} else {
   module.exports = Redux.createStore(reducer, reduxDevtools(Redux.applyMiddleware(thunk)));
}