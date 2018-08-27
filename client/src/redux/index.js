import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import defaultReducer from './reducers/defaultReducer'
import form from './reducers/formReducer'

const rootReducer = combineReducers({ defaultReducer, form })

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

export default store
