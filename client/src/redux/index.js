import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import form from './reducers/formReducer'
import contentful from './reducers/contentfulReducer'

const rootReducer = combineReducers({ form, contentful })

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState().contentful))

export default store
