import React from 'react';
import './App.css';

// redux
import { connect } from 'react-redux';
import { titleFX, setQueryType, setQuery, getData } from './actions'

// local imports
import Header from './components/Header/Header'
import Results from './components/Results/Results'
import List from './components/List/List'

function App(props) {



  return (
    <div className="App">
      <div>
        <Header
          title={props.titleOnProps}
          changeTitle={props.titleFX}
          setQuery={props.setQuery}
          setQueryType={props.setQueryType}
          query={props.query}
          queryType={props.queryType}/>
        <Results
          getData={props.getData}
          random={props.random}/>
      </div>
      <List />
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    titleOnProps: state.title,
    queryType: state.queryType,
    query: state.query,
    error: state.error,
    random: state.random,
    isLoading: state.isLoading
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  { titleFX, setQueryType, setQuery, getData }
)(App)

export default ConnectedApp;
