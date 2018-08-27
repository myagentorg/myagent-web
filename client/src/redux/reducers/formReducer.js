const initialState = {}

const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_FIELD':
            return {
                ...state,
                [action.field]: action.value
            }
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

export default defaultReducer
