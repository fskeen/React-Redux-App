export const titleFX = () => {
    return {
        type: 'FAKE_TITLE'
    }
}

export const setQueryType = (queryType) => {
    console.log("querytype action invoked")
    return {
        type: 'SET_QUERY_TYPE',
        payload: queryType
    }
}

export const setQuery = (query) => {
    console.log("query action invoked")
    return {
        type: 'SET_QUERY',
        payload: query
    }
}