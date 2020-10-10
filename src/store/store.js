import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'


// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger))
    return store
}
