import * as contentful from 'contentful'

const client = contentful.createClient({
  space: '9ms958bfcgie',
  accessToken:
    '007d419b35734161db1a53a062092c26bf2e24f151ac2825cf26c313824e38d6'
})

const initialState = {
  city: 'Your City',
  path: '/',
  mainImage: null,
  topFormTitle: 'Find Top Real Estate Agents in Your City',
  topFormParagraph: [
    'MyAgent.io is a free service that helps you find a top-performing agent you can trust.',
    'Get started today by entering a city or neighborhood below.'
  ],
  topFormSearchBoxPlaceholder: 'Enter a city or neighborhood...',
  topFormCallToAction: 'Find Your Perfect Agent',
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        ...action.cityData,
        loading: action.loading
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}

export const getCity = path => {
  return dispatch => {
    dispatch({
      type: 'SET_LOADING',
      loading: true
    })
    client
      .getEntries({
        content_type: 'cityTest',
        'fields.path': path,
        'fields.items.sys.contentType.sys.id': 'cityTest'
      })
      .then(res => {
        if (res.total) {
          const entry = res.items[0].fields

          const {
            mainImage: {
              fields: {
                file: { url }
              }
            }
          } = entry

          const cityData = {
            ...entry,
            mainImage: url
          }

          dispatch({
            type: 'SET_CITY',
            cityData,
            loading: false
          })
        } else {
          dispatch({
            type: 'SET_LOADING',
            loading: false
          })
        }
      })
      .catch(e => console.error(e))
  }
}

export default reducer
