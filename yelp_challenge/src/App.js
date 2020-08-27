import React from 'react';
import './App.css';
import Main from './components/Main/Main';

/*
1. Input validation -> if !res.ok -> throw error on client
2. Sorting -> pull limit 50 sort them on client
*/

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
