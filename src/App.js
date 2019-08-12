import React from 'react';
import './App.css';

import useJsonFetch from './hooks/useJsonFetch';

function AppHook ({ url }) {
  const[data, isLoading, hasError] = useJsonFetch(url)
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h1>{isLoading && 'Is Loading'}</h1>
      <h1>{hasError && 'Has Error'}</h1>
    </div>
  );
}

export default function App() {
  return (<div>
    <AppHook url={process.env.REACT_APP_DATA_URL} />
    <hr />
    <AppHook url={process.env.REACT_APP_ERROR_URL} />
    <hr />
    <AppHook url={process.env.REACT_APP_LOADING_URL} />
    <hr />
  </div>)
}
