import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer, fetch_start, fetch_done} from './Reducer'

const initialState = {}

const store = createStore(reducer, applyMiddleware(thunk))

// store.dispatch(fetch_start())
// store.dispatch(fetch_done())

export default store
