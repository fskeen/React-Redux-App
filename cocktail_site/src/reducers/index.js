const initialState = {
    title: "Hmmm, I need a new title.",
    queryType: "",
    query: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAKE_TITLE':
            return {
                ...state,
                title: "Hello from the store!"
            }
        case 'SET_QUERY_TYPE':
            return {
                ...state,
                queryType: action.payload
            }
        case 'SET_QUERY':
            return {
                ...state,
                query: action.payload
            }
        default:
            return state;
    }

}