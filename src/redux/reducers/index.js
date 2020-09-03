import {combineReducers} from 'redux';
import filtersReducer from './filters'
import cryptoReducer from './crypto'

const rootReducer = combineReducers({
    filters: filtersReducer,
    crypto: cryptoReducer
})

export default rootReducer