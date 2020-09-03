const initialState = {
    bySort: 'all'
}

const filters = (state = initialState, action) => {
    if (action.type === 'SORT_BY') {
        return {
            ...state,
            bySort: action.payload
        }
    }
    return state
}

export default filters