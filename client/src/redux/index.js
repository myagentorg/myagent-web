import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import form from './reducers/formReducer'

const rootReducer = combineReducers({ form })

const store = createStore(rootReducer, applyMiddleware(thunk))

// store.subscribe(() => console.log(store.getState()))

export default store
