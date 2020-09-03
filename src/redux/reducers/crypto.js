const initialState = {
    items: [],
    isLoaded: false
}

const crypto = (state = initialState, action) => {
    if (action.type === 'SET_CRYPTO') {
        return {
            ...state,
            items: action.payload
        }
    }

    return state
}

export default crypto;