import axios from 'axios'

const initialState = {}

const formReducder = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_FIELD':
      return {
        ...state,
        [action.field]: action.value
      }
    case 'POST_TO_DATABASE':
      return initialState
    default:
      return state
  }
}

export const addNewField = (field, value) => {
  return {
    type: 'ADD_NEW_FIELD',
    field,
    value
  }
}

export const postToDatabase = body => {
  return dispatch => {
    axios
      .post('/records', body)
      .then(response => {
        dispatch({ type: 'POST_TO_DATABASE' })
      })
      .catch(err => console.error(err))
  }
}

export default formReducder
