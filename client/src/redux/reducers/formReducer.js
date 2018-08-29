import axios from 'axios'

const initialState = {}

// const hubspotKey = '00ca603b-8d63-4f71-9e98-334f5accaf3a'
// const hubspotUrl = `https://api.hubapi.com/contacts/v1/contact/?hapikey=${hubspotKey}`
// const createHubspotBody = body => {
//     return Object.keys(body).reduce(
//         (final, key) => {
//             final.properties.push({ property: key, value: body[key] })
//             return final
//         },
//         { properties: [] }
//     )
// }

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
                // console.log(createHubspotBody(body))
                // axios.post(hubspotUrl, body)
            })
            .catch(err => console.error(err))
    }
}

export default formReducder
