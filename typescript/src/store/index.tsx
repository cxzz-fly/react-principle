import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'
import history from './history'

const loggerMiddleware = createLogger({collapsed: true});
const middleware = [routerMiddleware(history),thunk, loggerMiddleware];
const store = createStore(   
    reducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);
export default store