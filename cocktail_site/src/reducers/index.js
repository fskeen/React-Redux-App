const initialState = {
    title: "Hmmm, I need a new title.",
    queryType: "Name",
    query: "",
    isLoading: false,
    error: '',
    random: {}
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
            
        case 'FETCH_RANDOM_START':
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case 'FETCH_RANDOM_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                random: action.payload.drinks[0]

            }

        default:
            return state;
    }

}