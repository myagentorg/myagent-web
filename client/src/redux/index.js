import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import defaultReducer from './reducers/defualtReducer'

const rootReducer = combineReducers({ defaultReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
