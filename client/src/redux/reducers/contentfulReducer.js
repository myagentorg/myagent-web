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
  stepsHeadline:
    "Here's how we've helped over 150,000 home buyers and sellers find their perfect real estate agent…",
  moreInfoTitle1: 'You Deserve a Top Agent',
  moreInfoTitle2:
    'We Partner With Agents From the Top Brokerages Around the Country',
  reviewsHeadline: 'Home Buyers and Sellers Love MyAgent.io',
  reviewsSummary:
    'MyAgent.io has an overall satisfaction rating of 4.8 out of 5 on ShopperApproved.com.',
  reviews: [
    {
      fields: {
        author: 'Randy & Sue H.',
        rating: 5,
        review:
          'Buying and selling a house is a life altering process. MyAgent.io allowed us to do both with very positive results from a perfect real estate professional. We highly recommend their services.'
      }
    },
    {
      fields: {
        author: 'Francine L.',
        rating: 5,
        review:
          'MyAgent.io connected me with a Realtor very quickly—within an hour of visiting their website—and the Realtor we had was second to none! We will recommend MyAgent.io to others and will use them again in the future.'
      }
    },
    {
      fields: {
        author: 'Darah J.',
        rating: 5,
        review:
          'I was shocked by how quick all communication was. I was concerned about the quality I’d receive as I was looking for an out-of-city agent, but I don’t think I could have found a better agent for my situation. We now have the perfect house that fits our needs!'
      }
    },
    {
      fields: {
        author: 'Tim D.',
        rating: 5,
        review:
          'The service was fast and effective! Within minutes, I was contacted by their representatives and put in contact with a very helpful agent. Great experience—wouldn’t hesitate to use MyAgent.io again in another city.'
      }
    }
  ],
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
