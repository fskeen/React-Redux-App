import axios from 'axios'


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

export const getData = () => {
    return dispatch => {
      dispatch({ type: 'FETCH_RANDOM_START' });
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => {
          console.log(res);
          dispatch({ type: 'FETCH_RANDOM_SUCCESS', payload: res.data });
        })
        .catch(err => {
          dispatch({ type: 'FETCH_RANDOM_FAILURE', payload: err.response });
        });
    };
  };
  